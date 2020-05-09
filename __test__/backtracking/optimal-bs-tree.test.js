const tree = require("../../lib/backtracking/optimal-bs-tree");

test("construct optinal BS-tree normal case", () => {

    const arr = [2, 3, 4, 5, 6, 7, 8];
    const freq = [3, 2, 4, 1, 5, 2, 3];

    const actualRes = tree.createOptimalTree(arr, freq);

    expect(actualRes.cost).toBe(45);

    expect(actualRes.getRoot().getValue()).toBe(6);

    expect(actualRes.getRoot().getLeft().getValue()).toBe(4);
    expect(actualRes.getRoot().getLeft().getLeft().getValue()).toBe(2);
    expect(actualRes.getRoot().getLeft().getRight().getValue()).toBe(5);
    expect(actualRes.getRoot().getLeft().getLeft().getRight().getValue()).toBe(3);

    expect(actualRes.getRoot().getRight().getValue()).toBe(8);
    expect(actualRes.getRoot().getRight().getLeft().getValue()).toBe(7);
});

/*

1. Refactor PGW for OCI deployment (code & infrastructure) (MUST): total = 10 ( (10.0 / 14.0) * 3 = 2.14 sprints per user)
    - Dockerize PGW (image, hadolint, clair) <-- 3
    - Change F5 configuration for new OCI ips <-- 1
    - Make Paymentus & LUS payment service accessible from PGW (firewalls etc.) <-- 1
    - Monitoring configuration / prometheus integration <- 2
    - Configure logs and create LOG dashboard (Kibana) <-- 3

2. Create fully working PGW CI pipeline in OCI (MUST): total = 8 (1.7 sprints per user)
    - Maven build + Upload all PGW dependencies to Artifactory <-- 5
    - Configure Gitlab CI <-- 3

3. Integrate PGW with Secret Store & MapConfig (MUST): total = 6 (1.3 sprints per person)
    - migrate all Values from DC6 Vault to OCI SS <-- 1
        (secret/opower/app/payment-gateway-service/dev/integration/oucss/lus and secret/opower/app/payment-gateway-service/dev/integration/paymentus/lus)
    - migrate all Chef data bags to Map Config <-- 2 (https://github.va.opower.it/chef/data/blob/dss-pci/roles/pgw-dev.json#L21)
    - change PGW codebase to read values from SS & DSS Consul <-- 3

4. SAML for standalone backend work (MUST): total = 11 (2.4 sprints per person)
    - Integrate Ping Federate and IdCS as IdP <-- 2
    - IMS endpoint to return user data or PF url for standalone <-- 3
    - IMS endpoint to consume SAML assertion + S/S changes with temp session <-- 3
    - IMS endpoint to exchange temp token to session token <-- 2
    - Configure Ping Federate SAML flow for DSS standalone in dev tier <-- 1

5. Password change backend work for IDCS (STRETCH): total = 3 (0.6 sprints per person)
    - Add password change endpoint inside IMS <-- 3


 */
