export default {
  path: [
    { url: '/api/v1/auth/login', methods: ['POST'] },
    { url: '/api/v1/auth/login/admin', methods: ['POST'] },

    { url: '/api/v1/users', methods: ['POST'] },
    { url: '/api/v1/users/forgot-password/send-pin', methods: ['PATCH'] },
    { url: '/api/v1/users/forgot-password/validate-pin', methods: ['PATCH'] },
    { url: '/api/v1/users/forgot-password', methods: ['PATCH'] }
  ]
}
