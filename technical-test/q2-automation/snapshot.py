#!/usr/bin/env python3
import csv, os, datetime
# File naming convention: snapshot_YYYYMMDD_HHMMSS.csv
filename = "snapshot_" + datetime.datetime.now().strftime("%Y%m%d_%H%M%S") + ".csv"
filepath = os.path.join("/mnt/d/Docker/PMT-BARA/technical-test/q2-automation/snapshots", filename)
os.makedirs(os.path.dirname(filepath), exist_ok=True)
with open(filepath, "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["subscriberId", "callMinutes", "smsCount", "dataUsageMB", "timestamp"])
    # Contoh data (dapat disesuaikan dengan Q1 atau database)
    writer.writerow(["SUB01", 40, 10, 1500, datetime.datetime.now().isoformat()])
print("Snapshot saved:", filepath)
