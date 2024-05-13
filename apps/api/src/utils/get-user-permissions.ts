import { defineAbilitiesFor, type Role, userSchema } from '@saas/auth'

export function getPermissions(userId: string, role: Role) {
  const authUser = userSchema.parse({
    id: userId,
    role,
  })

  const ability = defineAbilitiesFor(authUser)

  return ability
}
