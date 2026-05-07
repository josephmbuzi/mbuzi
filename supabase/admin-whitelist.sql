insert into public.admin_users (id, email)
select id, email
from auth.users
where email = 'josephmbuzi9@gmail.com'
on conflict (id) do update
set email = excluded.email;

select id, email, created_at
from public.admin_users
where email = 'josephmbuzi9@gmail.com';
