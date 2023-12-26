export interface OutlinerNode {

}

export interface TreeNode {
  id?: string
  name: string
  type?: string
  /**
   * 是否展开
   */
  expanded?: boolean
  active?: boolean
  selectable?: boolean
  visible?: boolean
  match?: boolean
  muted?: boolean
  parentUnselectable?: boolean
  children?: TreeNode[]
}

export type Trees = TreeNode[]
