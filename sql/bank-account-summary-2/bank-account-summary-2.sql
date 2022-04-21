# Write your MySQL query statement below
select
  u.name,
  t.balance
from
  users u
  join (
    select
      account,
      sum(amount) as balance
    from
      transactions
    group by
      account
  ) t on u.account = t.account
where
  t.balance > 10000;