# Write your MySQL query statement below
select
  u.user_id as buyer_id,
  u.join_date,
  ifnull(o.total, 0) as orders_in_2019
from
  users u
  left join (
    select
      buyer_id,
      order_date,
      count(*) as total
    from
      orders
    where
      year(order_date) = '2019'
    group by
      buyer_id
  ) o on u.user_id = o.buyer_id;