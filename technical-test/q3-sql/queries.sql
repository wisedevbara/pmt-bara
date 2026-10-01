-- Q3 SQL
-- 1. Insert subscriber baru
INSERT INTO subscribers (id, name, plan, activation_date)
VALUES ('SUB07', 'Fajar', 'Basic', '2024-01-24');

-- 2. Update plan Fajar ke Premium
UPDATE subscribers
SET plan = 'Premium'
WHERE id = 'SUB07';

-- 3. Total data usage semua Premium-plan subscribers
SELECT SUM(u.dataUsageMB) AS total_premium_data_usage
FROM usage u
JOIN subscribers s ON u.subscriberId = s.id
WHERE s.plan = 'Premium';

-- 4. Top 3 subscribers by total data usage
SELECT subscriberId, SUM(dataUsageMB) AS total_usage
FROM usage
GROUP BY subscriberId
ORDER BY total_usage DESC
LIMIT 3;

-- 5. Subquery: rata-rata callMinutes <= 30
SELECT subscriberId
FROM usage
GROUP BY subscriberId
HAVING AVG(callMinutes) <= 30;
