-- As part of HackerSniff's DPI (Deep Packet Inspection) software analytics, a team needs a list of all the protocols for which incoming traffic is higher than outgoing.

-- The result should be in the following format: protocol, traffic_in, traffic_out.

-- Results should be sorted ascending by protocol.

-- traffic
-- name type description
-- client VARCHAR(17) Client MAC address
-- protocol VARCHAR(64) Protocol name
-- traffic_in INT Traffic in
-- traffic_out INT Traffic out

-- For the sample data in table:

-- traffic
-- client            protocol traffic_in traffic_out
-- 02-E1-80-76-EC-4B BGP     0           234737
-- 43-15-AA-26-0F-A4 BGP     402860      606565
-- 90-E7-B0-14-7E-8C BGP     840772       988197
-- FB-60-23-C1-5E-D6 DNS     341155       356569
-- 4D-6D-7F-62-F4-00 FTP     8346       413322
-- 09-89-26-46-C4-21 FTP     210656       470568
-- B1-6A-35-2F-1A-C2 FTP     897097       161083
-- 0C-CA-68-2D-4B-F5 HTTP     918793       550403
-- A4-C6-52-10-2E-9C HTTPS     520856       185387
-- 95-B8-7D-78-06-42 POP     150880       423073
-- B9-C1-1B-32-55-95 POP     862946       979544
-- 14-FD-21-F6-5E-67 SMTP     139389       280646
-- 70-E1-2D-B1-B2-9B SMTP     163986       450401
-- C6-F1-59-FF-5D-BE SMTP     271295       878246
-- 62-01-CF-AD-32-A7 SMTP     388933       81625
-- 41-80-FB-86-D1-93 SMTP     752842       253981
-- 93-3F-01-57-5F-4A SSH     496717       599280
-- 52-F2-BF-45-84-74 SSH     632534       128765
-- 87-66-B5-A5-2F-7B SSH     835441       354950
-- CE-FC-80-F3-95-58 UDP     903443       120298

-- the expected output is:

-- protocol ▲ traffic_in traffic_out
-- FTP 1116099 1044973
-- HTTP 918793 550403
-- HTTPS 520856 185387
-- SSH 1964692 1082995
-- UDP 903443 120298
SELECT protocol,
       SUM(traffic_in) AS traffic_in,
       SUM(traffic_out) AS traffic_out
FROM traffic
GROUP BY protocol
HAVING SUM(traffic_in) > SUM(traffic_out)
ORDER BY protocol ASC;