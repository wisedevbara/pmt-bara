// Root cause: reduce tidak punya initial value (total = 0) dan tidak return.
function getTotalUsageMB(records) {
  return records.reduce((total, record) => {
    total += record.dataUsageMB;
    return total;  // wajib return akumulasi per iterasi
  }, 0);            // wajib initial value 0
}

// Pencegahan: selalu set initial value di reduce; gunakan lint/test untuk mendeteksi.
