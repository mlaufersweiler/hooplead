SELECT 
    player_id,
    player_name,
    player_position
FROM players
WHERE team_id = $1
ORDER BY player_id DESC;