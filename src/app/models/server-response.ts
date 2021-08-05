export interface ServerResponse {
    data: any;
    msg?: Message;
    current_page?: number;
    last_page?: number;
    total?: number;
    to?: number;
    from?: number;
  }
  
  interface Message {
    summary?: string;
    detail?: string;
    code?: string;
  }