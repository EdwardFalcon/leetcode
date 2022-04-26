select
  id,
  case
    when id = (
      select
        t.id
      from
        tree t
      where
        t.p_id is null
    ) then 'Root'
    when id in (
      select
        t.p_id
      from
        tree t
    ) then 'Inner'
    else 'Leaf'
  end as type
from
  tree
order by
  id;