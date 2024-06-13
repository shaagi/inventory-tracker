import mysql from "mysql2";
import { app, server, db } from "../index";

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
    test("should create a MySQL connection with the correct config", () => {
        const expectedConfig = {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
        };

        expect(mysql.createConnection).toHaveBeenCalledWith(expectedConfig);
    });

    // Close the server and database connection after all tests
     afterAll(async () => {
        if (server) {
            server.close(); // Close Express server if it exists
        }
        if (db) {
            console.log('closing');
            db.end(); // Close MySQL connection if it exists
        }

        // Optionally add a delay or await for any async cleanup tasks
        await new Promise(resolve => setTimeout(() => resolve(), 500)); // Adjust delay as needed
    });
});