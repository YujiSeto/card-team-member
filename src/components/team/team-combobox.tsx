"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import { Role } from "@/types/role"

const roles = [
  {
    label: "Viewer",
    description: "Can View and comment.",
    value: "viewer",
  },
  {
    label: "Developer",
    description: "Can view, comment and edit.",
    value: "developer",
  },
  {
    label: "Billing",
    description: "Can view, comment and manage billing.",
    value: "billing",
  },
  {
    label: "Owner",
    description: "Admin-level access to all resources.",
    value: "owner",
  },
]

type Props = {
  value: Role
  setValue: (newValue: Role) => void
}

export function TeamCombobox({ value, setValue }: Props) {
  const selectedRole = roles.find((r) => r.value === value)

  return (
    <Combobox
      items={roles}
      itemToStringValue={(role: (typeof roles)[number]) => role.label}
    >
      <ComboboxInput
        placeholder={selectedRole?.label || "Select role..."}
      />
      <ComboboxContent>
        <ComboboxEmpty>No roles found.</ComboboxEmpty>
        <ComboboxList>
          {(role) => (
            <ComboboxItem
              key={role.value}
              value={role}
              onClick={() => setValue(role.value as Role)}
            >
              <Item size="sm" className="p-0">
                <ItemContent>
                  <ItemTitle className="whitespace-nowrap">
                    {role.label}
                  </ItemTitle>
                  <ItemDescription>{role.description}</ItemDescription>
                </ItemContent>
              </Item>
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}