# Write your MySQL query statement below
select
  u.name,
  ifnull(d.total, 0) as travelled_distance
from
  users u
  left join (
    select
      user_id,
      sum(distance) as total
    from
      rides
    group by
      user_id
  ) d on u.id = d.user_id
order by
  d.total desc,
  u.name asc;