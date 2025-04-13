export function transformLevelData<T extends { Id: number; Name?: string }>(
  data: T[],
  label?: keyof T
) {
  return data.map(({ Id, Name, ...rest }) => {
    const labelKey = label as unknown as keyof typeof rest; // Pastikan label bisa diakses di rest
    return {
      id: Id,
      label:
        label && rest[labelKey]
          ? String(rest[labelKey])
          : Name || String(label),
      ...rest, // Menyimpan properti lainnya jika ada
    };
  });
}
