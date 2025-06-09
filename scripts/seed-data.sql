-- Seed data for Healthcare Finance System
-- This script populates the database with sample data for testing

-- Insert sample users
INSERT INTO users (username, email, password_hash, role, full_name) VALUES
('admin', 'admin@hospital.com', '$2b$10$example_hash_admin', 'admin', 'Administrator System'),
('bendahara1', 'bendahara@hospital.com', '$2b$10$example_hash_bendahara', 'bendahara', 'Siti Bendahara'),
('manajemen1', 'manajemen@hospital.com', '$2b$10$example_hash_manajemen', 'manajemen', 'Dr. Budi Manajemen')
ON CONFLICT (username) DO NOTHING;

-- Insert sample doctors
INSERT INTO doctors (doctor_code, full_name, specialization) VALUES
('DOC001', 'Dr. Ahmad Rizki, Sp.PD', 'Penyakit Dalam'),
('DOC002', 'Dr. Siti Nurhaliza, Sp.A', 'Anak'),
('DOC003', 'Dr. Budi Santoso, Sp.B', 'Bedah'),
('DOC004', 'Dr. Maya Sari, Sp.OG', 'Obstetri Ginekologi'),
('DOC005', 'Dr. Andi Wijaya, Sp.JP', 'Jantung')
ON CONFLICT (doctor_code) DO NOTHING;

-- Insert sample patients
INSERT INTO patients (bpjs_number, nik, full_name, birth_date, phone, address) VALUES
('0001234567890', '3201234567890001', 'Ahmad Rizki Pratama', '1985-05-15', '081234567890', 'Jl. Merdeka No. 123, Jakarta'),
('0001234567891', '3201234567890002', 'Siti Nurhaliza Dewi', '1990-08-22', '081234567891', 'Jl. Sudirman No. 456, Jakarta'),
('0001234567892', '3201234567890003', 'Budi Santoso Wijaya', '1978-12-10', '081234567892', 'Jl. Thamrin No. 789, Jakarta'),
('0001234567893', '3201234567890004', 'Maya Sari Indah', '1995-03-18', '081234567893', 'Jl. Gatot Subroto No. 321, Jakarta'),
('0001234567894', '3201234567890005', 'Andi Wijaya Kusuma', '1982-11-05', '081234567894', 'Jl. Rasuna Said No. 654, Jakarta')
ON CONFLICT (bpjs_number) DO NOTHING;

-- Insert sample transactions
INSERT INTO transactions (transaction_code, patient_id, doctor_id, transaction_type, service_type, diagnosis, service_date, amount, total_amount, status, created_by) VALUES
('TXN-2024-001', 1, 1, 'bpjs', 'rawat-jalan', 'Hipertensi', '2024-01-15', 250000, 250000, 'approved', 2),
('TXN-2024-002', 2, 2, 'bpjs', 'rawat-jalan', 'ISPA', '2024-01-15', 150000, 150000, 'approved', 2),
('TXN-2024-003', 3, 3, 'mandiri', 'konsultasi', 'Check-up rutin', '2024-01-15', 200000, 200000, 'paid', 2),
('TXN-2024-004', 4, 4, 'bpjs', 'rawat-inap', 'Persalinan normal', '2024-01-14', 1500000, 1500000, 'approved', 2),
('TXN-2024-005', 5, 5, 'mandiri', 'rawat-jalan', 'Konsultasi jantung', '2024-01-14', 300000, 300000, 'paid', 2);

-- Insert sample BPJS claims
INSERT INTO bpjs_claims (transaction_id, claim_number, ina_cbg_code, tariff_amount, claim_status) VALUES
(1, 'CLAIM-2024-001', 'I10', 250000, 'approved'),
(2, 'CLAIM-2024-002', 'J06', 150000, 'approved'),
(4, 'CLAIM-2024-004', 'O80', 1500000, 'processing');

-- Insert sample audit logs
INSERT INTO audit_logs (user_id, action, resource_type, resource_id, details, ip_address, status) VALUES
(1, 'LOGIN', 'System', NULL, 'User logged in successfully', '192.168.1.100', 'success'),
(2, 'CREATE_TRANSACTION', 'Transaction', 1, 'Created BPJS transaction for patient ID: 1', '192.168.1.101', 'success'),
(3, 'VIEW_REPORT', 'Report', NULL, 'Accessed monthly financial report', '192.168.1.102', 'success'),
(2, 'UPDATE_TRANSACTION', 'Transaction', 1, 'Updated transaction status to approved', '192.168.1.101', 'success'),
(1, 'CREATE_USER', 'User', 2, 'Created new user account for bendahara', '192.168.1.100', 'success');

-- Insert sample financial reports
INSERT INTO financial_reports (report_type, report_title, report_period_start, report_period_end, status, generated_by) VALUES
('monthly', 'Laporan Keuangan Bulanan - Januari 2024', '2024-01-01', '2024-01-31', 'ready', 3),
('bpjs_analysis', 'Analisis Tren BPJS - 6 Bulan Terakhir', '2023-08-01', '2024-01-31', 'ready', 3),
('executive_dashboard', 'Dashboard Eksekutif - Q1 2024', '2024-01-01', '2024-03-31', 'generating', 3),
('audit_report', 'Laporan Audit Keuangan - Januari 2024', '2024-01-01', '2024-01-31', 'ready', 1);
