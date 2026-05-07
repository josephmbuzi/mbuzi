create table if not exists public.blogs (
  slug text primary key,
  title text not null,
  published_at date not null,
  read_time text not null,
  category text not null,
  excerpt text not null,
  seo_description text,
  content jsonb not null default '[]'::jsonb,
  status text not null default 'Draft' check (status in ('Published', 'Draft')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.admin_users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  created_at timestamptz not null default now()
);

alter table public.blogs enable row level security;
alter table public.admin_users enable row level security;

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

drop policy if exists "Anyone can read published blogs" on public.blogs;
create policy "Anyone can read published blogs"
  on public.blogs
  for select
  using (status = 'Published');

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

drop policy if exists "Admins can read admin users" on public.admin_users;
create policy "Admins can read admin users"
  on public.admin_users
  for select
  to authenticated
  using (public.is_admin());

-- After creating your Supabase Auth user, whitelist it with:
-- insert into public.admin_users (id, email)
-- select id, email from auth.users where email = 'you@example.com';
