import mysql from "mysql2";
import app from "../index";

jest.mock("mysql2", () => {
    const mConnection = {
        query: jest.fn(),
        end: jest.fn() // Mock the end method
    };
    return {
        createConnection: jest.fn(() => mConnection),
    };
});

describe("MySQL Connection", () => {
    beforeAll(() => {
        // Mock console.log to suppress unnecessary output during tests
        jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterAll(() => {
        // Restore original console.log implementation after all tests
        console.log.mockRestore();
    });
    test("should create a MySQL connection with the correct config", () => {
        const expectedConfig = {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
        };

        expect(mysql.createConnection).toHaveBeenCalledWith(expectedConfig);
    });

     

    // Write your other tests here
});