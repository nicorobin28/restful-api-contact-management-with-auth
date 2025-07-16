import supertest from "supertest";
import {
  createTestUser,
  removeAllTestContacts,
  removeTestUser,
} from "./test-util.js";
import { web } from "../src/application/web.js";

describe("POST /api/contacts", () => {
  beforeEach(async () => {
    await createTestUser();
  });

  afterEach(async () => {
    await removeAllTestContacts();
    await removeTestUser();
  });

  it("should can create new contact", async () => {
    const result = await supertest(web)
      .post("/api/contacts")
      .set("Authorization", "test")
      .send({
        first_name: "Askar",
        last_name: "Prayogo",
        email: "prayogoaskar@gmail.com",
        phone: "0892839283",
      });

    expect(result.status).toBe(200);
    expect(result.body.data.id).toBeDefined();
    expect(result.body.data.first_name).toBe("Askar");
    expect(result.body.data.last_name).toBe("Prayogo");
    expect(result.body.data.email).toBe("prayogoaskar@gmail.com");
    expect(result.body.data.phone).toBe("0892839283");
  });

  it("should reject if request is not valid", async () => {
    const result = await supertest(web)
      .post("/api/contacts")
      .set("Authorization", "test")
      .send({
        first_name: "",
        last_name: "",
        email: "lasdlaksld",
        phone: "0892839280302930920392038923743028928492833",
      });

    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });
});
