import type { APIRequestContext } from '@playwright/test';

export class BookingApi {
    constructor(private readonly request: APIRequestContext) {}

    async auth(): Promise<string> {
        // Stubbed auth implementation for compile-time typing.
        // Replace with a real request flow if needed.
        return '';
    }
}
