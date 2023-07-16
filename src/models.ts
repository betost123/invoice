export interface Invoice {
  created_at: Date;
  customer_address: string;
  customer_city: string;
  customer_country: string;
  customer_name: string;
  customer_zip: string;
  delivery_address: string;
  delivery_city: string;
  delivery_country: string;
  delivery_name: string;
  delivery_zip: string;
  due_date: Date;
  id: number;
  invoice_date: Date;
  ocr: number;
}
