create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admin_users
    where admin_users.id = auth.uid()
  );
$$;

grant execute on function public.is_admin() to anon, authenticated;

insert into public.admin_users (id, email)
select id, email
from auth.users
where lower(email) = lower('josephmbuzi9@gmail.com')
on conflict (id) do update
set email = excluded.email;

drop policy if exists "Admins can read all blogs" on public.blogs;
create policy "Admins can read all blogs"
  on public.blogs
  for select
  to authenticated
  using (public.is_admin());

drop policy if exists "Admins can insert blogs" on public.blogs;
create policy "Admins can insert blogs"
  on public.blogs
  for insert
  to authenticated
  with check (public.is_admin());

drop policy if exists "Admins can update blogs" on public.blogs;
create policy "Admins can update blogs"
  on public.blogs
  for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

select
  auth_users.id,
  auth_users.email,
  auth_users.email_confirmed_at is not null as email_confirmed,
  admin_users.id is not null as is_whitelisted
from auth.users as auth_users
left join public.admin_users as admin_users
  on admin_users.id = auth_users.id
where lower(auth_users.email) = lower('josephmbuzi9@gmail.com');
