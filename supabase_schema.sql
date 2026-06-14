-- Colle ce script dans : Supabase → ton projet → SQL Editor → New query → Run

create table if not exists plans (
  user_id    uuid references auth.users(id) on delete cascade primary key,
  data       jsonb not null default '{}',
  updated_at timestamptz not null default now()
);

alter table plans enable row level security;

create policy "own_data" on plans
  for all
  using  (auth.uid() = user_id)
  with check (auth.uid() = user_id);
