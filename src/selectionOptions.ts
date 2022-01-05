import { COLUMN_NAME } from "./features/types";

export const Status = [
  {
    value: "Not started",
    label: "開始前",
  },
  {
    value: "On going",
    label: "進行中",
  },
  {
    value: "Done",
    label: "完了",
  },
];

export const Category = [
  {
    value: "category_id_1",
    label: "設計",
  },
  {
    value: "category_id_2",
    label: "製造",
  },
  {
    value: "category_id_3",
    label: "テスト",
  },
];

export const ListColumns: { value: COLUMN_NAME; label: string; }[] = [
  {
    value: "task_name",
    label: "タスク名",
  },
  {
    value: "category_name",
    label: "カテゴリー",
  },
  {
    value: "status",
    label: "ステータス",
  },
  {
    value: "scheduled_startdate",
    label: "開始予定日",
  },
  {
    value: "scheduled_enddate",
    label: "終了予定日",
  },
  {
    value: "estimate_manhour",
    label: "見積工数",
  },
  {
    value: "assigned_name",
    label: "担当",
  },
  {
    value: "description",
    label: "備考",
  },
];

export const FilterOperatorOfString = [
  {
    value: "=",
    label: "に等しい",
  },
  {
    value: "start_from",
    label: "から始まる",
  },
  {
    value: "include",
    label: "を含む",
  },
  {
    value: "exclude",
    label: "を含まない",
  },
];

export const FilterOperatorOfNumber = [
  {
    value: "=",
    label: "に等しい",
  },
  {
    value: "<=",
    label: "より小さい",
  },
  {
    value: ">=",
    label: "より大きい",
  },
];

export const FilterOperatorOfDate = [
  {
    value: "=",
    label: "に等しい",
  },
  {
    value: "<=",
    label: "より以前の",
  },
  {
    value: ">=",
    label: "より以後の",
  },
];
