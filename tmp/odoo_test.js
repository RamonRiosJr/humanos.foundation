// Odoo Connection Test Scripture (Antigravity v0.5)
// This script checks the Odoo v19 REST integration directly from the server

const ODOO_URL = "https://team.humanos.foundation";
const API_KEY = "336177318cda29f77281753e09f2cb4eb04f5c33";

async function testOdoo() {
  console.log("--- STARTING ODOO CONNECTION TEST ---");
  console.log(`Target: ${ODOO_URL}`);
  
  try {
    // 1. Basic Health Check / Version check
    const response = await fetch(`${ODOO_URL}/api/v1/version`, {
      headers: { "X-Odoo-API-Key": API_KEY }
    });
    
    if (response.ok) {
      const data = await response.json();
      console.log("✅ BASIC VERSION CHECK: SUCCESS");
      console.log("Odoo Platform:", JSON.stringify(data, null, 2));
    } else {
      console.log(`⚠️ VERSION CHECK ATTEMPT FAILED (Status: ${response.status}). Attempting generic model list...`);
    }

    // 2. Test Model List (CRM Leads)
    const modelsResponse = await fetch(`${ODOO_URL}/api/crm.lead?limit=1`, {
      method: "GET",
      headers: { 
        "X-Odoo-API-Key": API_KEY,
        "Accept": "application/json"
      }
    });

    if (modelsResponse.ok) {
        const data = await modelsResponse.json();
        console.log("✅ DATA FETCH (CRM.LEAD): SUCCESS");
        console.log("Data sample:", JSON.stringify(data, null, 2));
    } else {
        console.log(`❌ DATA FETCH FAILED (Status: ${modelsResponse.status})`);
        const text = await modelsResponse.text();
        console.log("Reason:", text.substring(0, 500));
    }

  } catch (error) {
    console.error("🔥 CONNECTION FAILURE:", error.message);
  }
  
  console.log("--- TEST COMPLETE ---");
}

testOdoo();
