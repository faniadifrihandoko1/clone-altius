import { TreeNode } from "@/components/comon/custom-table/custom-tree-table/row-tree-node";

export const buildHierarchy = (data: any[]): TreeNode[] => {
  const map = new Map();
  const roots: TreeNode[] = [];

  data.forEach((item) => {
    map.set(item.Id, {
      ...item,
      id: item.Id,
      name: item.NameAsWorkUnit,
      children: [],
    });
  });

  data.forEach((item) => {
    if (item.ParentLevelId) {
      const parent = map.get(item.ParentLevelId);
      if (parent) parent.children.push(map.get(item.Id));
    } else {
      roots.push(map.get(item.Id));
    }
  });

  return roots;
};
