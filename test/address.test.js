import supertest from "supertest";
import {
  createManyTestContact,
  createTestAddress,
  createTestContact,
  createTestUser,
  getTestAddress,
  getTestContact,
  removeAllTestAddresses,
  removeAllTestContacts,
  removeTestUser,
} from "./test-util.js";
import { web } from "../src/application/web.js";

describe("POST /api/contacts/:contactId/addresses", () => {
  beforeEach(async () => {
    await createTestUser();
    await createTestContact();
  });

  afterEach(async () => {
    await removeAllTestAddresses();
    await removeAllTestContacts();
    await removeTestUser();
  });

  it("should can create new address for contact", async () => {
    const contact = await getTestContact();
    const result = await supertest(web)
      .post(`/api/contacts/${contact.id}/addresses`)
      .set("Authorization", "test")
      .send({
        street: "Jl. Test",
        city: "Test City",
        province: "West Java",
        country: "indonesia",
        postal_code: "12345",
      });

    expect(result.status).toBe(200);
    expect(result.body.data.id).toBeDefined();
    expect(result.body.data.street).toBe("Jl. Test");
    expect(result.body.data.city).toBe("Test City");
    expect(result.body.data.province).toBe("West Java");
    expect(result.body.data.postal_code).toBe("12345");
  });

  it("should reject if request is not valid", async () => {
    const contact = await getTestContact();
    const result = await supertest(web)
      .post(`/api/contacts/${contact.id}/addresses`)
      .set("Authorization", "test")
      .send({
        street: "",
        city: "",
        province: "",
        country: "indonesia",
        postal_code: "",
      });

    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });

  it("should reject if contact is not found", async () => {
    const result = await supertest(web)
      .post("/api/contacts/999999/addresses")
      .set("Authorization", "test")
      .send({
        street: "Jl. Test",
        city: "Test City",
        province: "West Java",
        country: "indonesia",
        postal_code: "12345",
      });

    expect(result.status).toBe(404);
  });
});

describe("GET /api/contacts/:contactId/addresses/:addressId", () => {
  beforeEach(async () => {
    await createTestUser();
    await createTestContact();
    await createTestAddress();
  });

  afterEach(async () => {
    await removeAllTestAddresses();
    await removeAllTestContacts();
    await removeTestUser();
  });

  it("should can get address by contactId and addressId", async () => {
    const testContact = await getTestContact();
    const testAddress = await getTestAddress();

    const result = await supertest(web)
      .get(`/api/contacts/${testContact.id}/addresses/${testAddress.id}`)
      .set("Authorization", "test");

    expect(result.status).toBe(200);
    expect(result.body.data.id).toBeDefined();
    expect(result.body.data.street).toBe("Jl. Test");
    expect(result.body.data.city).toBe("Test City");
    expect(result.body.data.province).toBe("West Java");
    expect(result.body.data.country).toBe("Indonesia");
    expect(result.body.data.postal_code).toBe("12345");
  });

  it("should reject if contact is not found", async () => {
    const testContact = await getTestContact();
    const testAddress = await getTestAddress();

    const result = await supertest(web)
      .get(`/api/contacts/${testContact.id + 1}/addresses/${testAddress.id}`)
      .set("Authorization", "test");

    expect(result.status).toBe(404);
  });

  it("should reject if address is not found", async () => {
    const testContact = await getTestContact();
    const testAddress = await getTestAddress();

    const result = await supertest(web)
      .get(`/api/contacts/${testContact.id}/addresses/${testAddress.id + 1}`)
      .set("Authorization", "test");

    expect(result.status).toBe(404);
  });
});

describe("PUT /api/contacts/:contactId/addresses", () => {
  beforeEach(async () => {
    await createTestUser();
    await createTestContact();
    await createTestAddress();
  });

  afterEach(async () => {
    await removeAllTestAddresses();
    await removeAllTestContacts();
    await removeTestUser();
  });

  it("should can update address for contact", async () => {
    const testContact = await getTestContact();
    const testAddress = await getTestAddress();

    const result = await supertest(web)
      .put(`/api/contacts/${testContact.id}/addresses/${testAddress.id}`)
      .set("Authorization", "test")
      .send({
        street: "Jl. Updated",
        city: "Updated City",
        province: "Updated Province",
        country: "Indonesia",
        postal_code: "54321",
      });

    expect(result.status).toBe(200);
    expect(result.body.data.id).toBe(testAddress.id);
    expect(result.body.data.street).toBe("Jl. Updated");
    expect(result.body.data.city).toBe("Updated City");
    expect(result.body.data.province).toBe("Updated Province");
    expect(result.body.data.postal_code).toBe("54321");
  });

  it("should reject if request is not valid", async () => {
    const testContact = await getTestContact();
    const testAddress = await getTestAddress();

    const result = await supertest(web)
      .put(`/api/contacts/${testContact.id}/addresses/${testAddress.id}`)
      .set("Authorization", "test")
      .send({
        id: testAddress.id,
        street: "",
        city: "",
        province: "",
        country: "Indonesia",
        postal_code: "",
      });

    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });

  it("should reject if contact is not found", async () => {
    const testAddress = await getTestAddress();

    const result = await supertest(web)
      .put(`/api/contacts/${999999}/addresses/${testAddress.id}`)
      .set("Authorization", "test")
      .send({
        id: testAddress.id,
        street: "Jl. Updated",
        city: "Updated City",
        province: "Updated Province",
        country: "Indonesia",
        postal_code: "54321",
      });

    expect(result.status).toBe(404);
  });
});

describe("DELETE /api/contacts/:contactId/addresses/:addressId", () => {
  beforeEach(async () => {
    await createTestUser();
    await createTestContact();
    await createTestAddress();
  });

  afterEach(async () => {
    await removeAllTestAddresses();
    await removeAllTestContacts();
    await removeTestUser();
  });

  it("should can delete address by contactId and addressId", async () => {
    const testContact = await getTestContact();
    const testAddress = await getTestAddress();

    const result = await supertest(web)
      .delete(`/api/contacts/${testContact.id}/addresses/${testAddress.id}`)
      .set("Authorization", "test");

    expect(result.status).toBe(200);
    expect(result.body.data).toBe("OK");
  });

  it("should reject if contact is not found", async () => {
    const testAddress = await getTestAddress();

    const result = await supertest(web)
      .delete(`/api/contacts/${999999}/addresses/${testAddress.id}`)
      .set("Authorization", "test");

    expect(result.status).toBe(404);
  });

  it("should reject if address is not found", async () => {
    const testContact = await getTestContact();

    const result = await supertest(web)
      .delete(`/api/contacts/${testContact.id}/addresses/${999999}`)
      .set("Authorization", "test");

    expect(result.status).toBe(404);
  });
});

describe("GET /api/contacts/:contactId/addresses", () => {
  beforeEach(async () => {
    await createTestUser();
    await createTestContact();
    await createManyTestContact();
  });

  afterEach(async () => {
    await removeAllTestAddresses();
    await removeAllTestContacts();
    await removeTestUser();
  });

  it("should can list addresses for contact", async () => {
    const testContact = await getTestContact();
    const result = await supertest(web)
      .get(`/api/contacts/${testContact.id}/addresses`)
      .set("Authorization", "test");

    expect(result.status).toBe(200);
    expect(result.body.data).toBeDefined();
    expect(Array.isArray(result.body.data)).toBe(true);
  });

  it("should reject if contact is not found", async () => {
    const result = await supertest(web)
      .get(`/api/contacts/${999999}/addresses`)
      .set("Authorization", "test");

    expect(result.status).toBe(404);
  });
});
