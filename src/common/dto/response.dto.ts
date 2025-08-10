export class ResponseDto<T> {
  data: T;
  message: string;
  success: boolean;
  timestamp: string;

  constructor(data: T, message = 'Success') {
    this.data = data;
    this.message = message;
    this.success = true;
    this.timestamp = new Date().toISOString();
  }
}

export class PaginatedResponseDto<T> extends ResponseDto<T[]> {
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };

  constructor(
    data: T[],
    total: number,
    page: number,
    limit: number,
    message = 'Success',
  ) {
    super(data, message);
    this.meta = {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }
}