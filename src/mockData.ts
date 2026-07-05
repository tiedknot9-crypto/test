import { Patient, Appointment, User, Bed, BillingRecord, LabTest, InventoryItem, OperationTheatre, OperationRecord, NursingTask, NurseShift, PatientVitals, Prescription } from './types';

export const MOCK_USERS: User[] = [
  { id: 'u2', name: 'Admin', email: 'admin@hospital.com', role: 'SUPER_ADMIN', department: 'Cardiology', specialization: 'Interventional Cardiology', degree: 'MD, DM (Cardiology)', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali' }
];

export const MOCK_PATIENTS: Patient[] = [
  {
    id: 'demo-p1',
    mrn: 'MRN-0001',
    name: 'Amit Patel',
    age: 28,
    gender: 'Male',
    phone: '9876543210',
    email: 'amit.patel@email.com',
    address: 'B-42, Sector 15, Noida',
    bloodGroup: 'A+',
    status: 'Active',
    dob: '1996-05-15'
  },
  {
    id: 'demo-p2',
    mrn: 'MRN-0002',
    name: 'Priya Singh',
    age: 45,
    gender: 'Female',
    phone: '9123456789',
    email: 'priya.singh@email.com',
    address: 'Flat 201, Green View, Mumbai',
    bloodGroup: 'O-',
    status: 'High Risk',
    dob: '1979-11-10'
  },
  {
    id: 'demo-p3',
    mrn: 'MRN-0003',
    name: 'Rahul Sharma',
    age: 34,
    gender: 'Male',
    phone: '9543210987',
    email: 'rahul.sharma@email.com',
    address: 'Main St, Delhi',
    bloodGroup: 'B+',
    status: 'Active',
    dob: '1990-02-20'
  }
];

export const MOCK_BEDS: Bed[] = [
  { id: 'b1', number: '101', ward: 'General Ward A', type: 'General', status: 'Available' },
  { id: 'b2', number: '102', ward: 'General Ward A', type: 'General', status: 'Available' },
  { id: 'b3', number: '201', ward: 'ICU', type: 'ICU', status: 'Available' },
  { id: 'b4', number: 'M1', ward: 'Maternity', type: 'Maternity', status: 'Available' },
];

export const MOCK_APPOINTMENTS: Appointment[] = [];

export const MOCK_BILLING: any[] = [
  {
    id: 'ph-bill1',
    patientId: 'demo-p1',
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    type: 'Pharmacy',
    items: [
      { description: 'Paracetamol 500mg Tablets (Batch A-10)', amount: 150, category: 'PHARMACY' },
      { description: 'Amoxicillin 250mg (Batch P-99)', amount: 450, category: 'PHARMACY' }
    ],
    totalAmount: 600,
    discount: 50,
    paidAmount: 550,
    status: 'Paid',
    paymentMode: 'Cash',
    patientName: 'Amit Patel',
    patientPhone: '9876543210',
    prescribingDoctor: 'Dr. Rajesh Sharma'
  },
  {
    id: 'ph-bill2',
    patientId: 'demo-p2',
    date: new Date().toISOString().split('T')[0],
    type: 'Pharmacy',
    items: [
      { description: 'Moxikind-CV 625 (Antibiotic prescription)', amount: 600, category: 'PHARMACY' },
      { description: 'Vitamin C Syrup (Multivitamins)', amount: 400, category: 'PHARMACY' }
    ],
    totalAmount: 1000,
    discount: 100,
    paidAmount: 900,
    status: 'Paid',
    paymentMode: 'UPI',
    patientName: 'Priya Singh',
    patientPhone: '9123456789',
    prescribingDoctor: 'Dr. R.K. Sharma'
  },
  {
    id: 'ipd-bill1',
    patientId: 'demo-p3',
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    type: 'IPD',
    items: [
      { description: 'Semi-Private Room Rent (2 Days Ward Stay)', amount: 6000, category: 'IPD' },
      { description: 'In-patient Nursing & Care Charges', amount: 2000, category: 'IPD' }
    ],
    totalAmount: 8000,
    discount: 500,
    paidAmount: 7500,
    status: 'Paid',
    paymentMode: 'UPI',
    patientName: 'Rahul Sharma',
    patientPhone: '9543210987',
    prescribingDoctor: 'Dr. Rajesh Sharma'
  }
];

export const MOCK_INVENTORY: InventoryItem[] = [
  { 
    id: 'i1', 
    name: 'Paracetamol 500mg', 
    category: 'Medicine', 
    stock: 500, 
    unit: 'Tablets', 
    minStockLevel: 100, 
    expiryDate: '2025-12-31',
    mrp: 15.50,
    sellingPrice: 12.00,
    purchasePrice: 8.00,
    taxPercentage: 12,
    hsnCode: '3004',
    rackNumber: 'A-101'
  },
  { 
    id: 'i2', 
    name: 'Amoxicillin 250mg', 
    category: 'Medicine', 
    stock: 50, 
    unit: 'Capsules', 
    minStockLevel: 100, 
    expiryDate: '2024-08-15',
    mrp: 45.00,
    sellingPrice: 40.00,
    purchasePrice: 30.00,
    taxPercentage: 12,
    hsnCode: '3004',
    rackNumber: 'B-202'
  },
  { 
    id: 'i3', 
    name: 'Moxikind-CV 625', 
    category: 'Medicine', 
    stock: 90, 
    unit: 'Strips', 
    minStockLevel: 10, 
    expiryDate: '2025-08-31',
    mrp: 150.00,
    sellingPrice: 120.00,
    purchasePrice: 80.00,
    taxPercentage: 12,
    hsnCode: '3004',
    rackNumber: 'B-902',
    batchNumber: 'B-902',
    composition: 'Amoxicillin + Clavulanic Acid',
    units_per_strip: 10,
    loose_selling_price: 12.00,
    loose_stock: 0,
    is_loose_sale_enabled: true
  },
  {
    id: 'i4',
    name: 'crocin',
    category: 'Medicine',
    stock: 20,
    unit: 'Strips',
    minStockLevel: 10,
    expiryDate: '2030-01-01',
    mrp: 55.00,
    sellingPrice: 52.00,
    purchasePrice: 26.00,
    taxPercentage: 12,
    hsnCode: '3004',
    rackNumber: 'N/A',
    batchNumber: '26',
    composition: 'Amoxicillin + Clavulanic Acid',
    units_per_strip: 10,
    loose_selling_price: 9.00,
    loose_stock: 80,
    is_loose_sale_enabled: true
  },
];

export const MOCK_THEATRES: OperationTheatre[] = [
  { id: 'ot1', name: 'OT-01 (Major)', status: 'Available', type: 'Major' },
  { id: 'ot2', name: 'OT-02 (Cardiac)', status: 'Occupied', type: 'Cardiac' },
  { id: 'ot3', name: 'OT-03 (Minor)', status: 'Maintenance', type: 'Minor' },
];

export const MOCK_OPERATION_RECORDS: OperationRecord[] = [];

export const MOCK_NURSING_TASKS: NursingTask[] = [];

export const MOCK_NURSE_SHIFTS: NurseShift[] = [
  { id: 'ns1', nurseId: 'u3', shiftType: 'Morning', ward: 'General Ward A', status: 'Active' },
  { id: 'ns2', nurseId: 'u1', shiftType: 'Morning', ward: 'ICU', status: 'Active' },
];

export const MOCK_PATIENT_VITALS: PatientVitals[] = [];

export const MOCK_PRESCRIPTIONS: Prescription[] = [];

export const MOCK_PHARMACY_BILLING: BillingRecord[] = [
  { 
    id: 'ph-bill3', 
    patientId: 'walk-in', 
    date: '2026-04-17', 
    items: [
      { description: 'Vitamin C Syrup', amount: 150, category: 'Pharmacy' }
    ], 
    totalAmount: 150, 
    paidAmount: 150, 
    status: 'Paid', 
    paymentMode: 'Cash',
    patientName: 'Sameer Khan',
    patientPhone: '9876543210',
    prescribingDoctor: 'Dr. R.K. Sharma'
  },
];

export const MOCK_LAB_TESTS = [
  { id: 'lt1', name: 'Complete Blood Count (CBC)', category: 'Pathology', price: 450 },
  { id: 'lt2', name: 'Liver Function Test (LFT)', category: 'Pathology', price: 1200 },
  { id: 'lt3', name: 'Kidney Function Test (KFT)', category: 'Pathology', price: 1100 },
  { id: 'lt4', name: 'Blood Sugar (F/PP)', category: 'Pathology', price: 200 },
  { id: 'lt5', name: 'Lipid Profile', category: 'Pathology', price: 850 },
  { id: 'lt6', name: 'Thyroid Profile (T3, T4, TSH)', category: 'Pathology', price: 950 },
  { id: 'lt7', name: 'Chest X-Ray', category: 'Radiology', price: 600 },
  { id: 'lt8', name: 'USG Whole Abdomen', category: 'Radiology', price: 1500 },
  { id: 'lt9', name: 'CT Scan Brain', category: 'Radiology', price: 4500 },
  { id: 'lt10', name: 'MRI Spine', category: 'Radiology', price: 8500 },
];

export const MOCK_BED_RATES = [
  { type: 'General', rate: 1500 },
  { type: 'Semi-Private', rate: 3000 },
  { type: 'Private', rate: 5000 },
  { type: 'ICU', rate: 8000 },
  { type: 'Maternity', rate: 4000 },
];

export const MOCK_OT_RATES = [
  { type: 'Minor', rate: 5000 },
  { type: 'Major', rate: 15000 },
  { type: 'Cardiac', rate: 45000 },
  { type: 'Neuro', rate: 55000 },
];

export const MOCK_MATERIAL_RATES = [
  { name: 'Surgical Gloves', price: 150, category: 'Disposable' },
  { name: 'Syringes (Pack of 10)', price: 100, category: 'Disposable' },
  { name: 'IV Fluid Set', price: 450, category: 'Disposable' },
  { name: 'Cotton / Bandage Kit', price: 200, category: 'Material' },
  { name: 'Disinfectant Solution', price: 350, category: 'Material' },
  { name: 'Catheter Set', price: 850, category: 'Disposable' },
];
