#!/usr/bin/env python3
import os, time
snapshots_dir = "/mnt/d/Docker/PMT-BARA/technical-test/q2-automation/snapshots"
if not os.path.exists(snapshots_dir):
    exit()
now = time.time()
for f in os.listdir(snapshots_dir):
    path = os.path.join(snapshots_dir, f)
    if os.path.isfile(path) and (now - os.path.getmtime(path)) > 30 * 86400:
        os.remove(path)
        print("Removed old snapshot:", f)
