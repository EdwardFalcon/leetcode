# Write your MySQL query statement below
select
  v.customer_id,
  count(v.visit_id) as count_no_trans
from
  visits v
where
  (
    select
      count(*)
    from
      transactions t
    where
      t.visit_id = v.visit_id
  ) = 0
group by
  v.customer_id;
#1869, 5.02%