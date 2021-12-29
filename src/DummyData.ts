import { TASK, USER_PROFILE, PROJECT, TASK_STATUS } from "./features/types";

export const dummyUsers: USER_PROFILE[] = [
  {
    user_id: "test1",
    first_name: "Hirohisa",
    last_name: "Kitsuka",
    avatar_img: "",
    comment: "Almost human",
    is_premium: true,
    is_admin: true,
  },
  {
    user_id: "test2",
    first_name: "寛久",
    last_name: "木塚",
    avatar_img: "",
    comment: "Almost human",
    is_premium: false,
    is_admin: true,
  },
  {
    user_id: "test2",
    first_name: "Hirohisa",
    last_name: "Kitsuka",
    avatar_img: "https://picsum.photos/200",
    comment: "I'm Almost human. I will be human someday. Cause I'm going my best effort.",
    is_premium: false,
    is_admin: false,
  },
  {
    user_id: "test2",
    first_name: "Hirohisa",
    last_name: "Kitsuka",
    avatar_img: "https://picsum.photos/200",
    comment: "Almost human",
    is_premium: false,
    is_admin: false,
  },
  {
    user_id: "test2",
    first_name: "Hirohisa",
    last_name: "Kitsuka",
    avatar_img: "https://picsum.photos/200",
    comment: "Almost human",
    is_premium: false,
    is_admin: false,
  },
  {
    user_id: "test2",
    first_name: "Hirohisa",
    last_name: "Kitsuka",
    avatar_img: "https://picsum.photos/200",
    comment: "Almost human",
    is_premium: false,
    is_admin: false,
  },
  {
    user_id: "test3",
    first_name: "Hirohisa",
    last_name: "Kitsuka",
    avatar_img: "https://picsum.photos/200",
    comment: "Almost human",
    is_premium: false,
    is_admin: false,
  },
  {
    user_id: "0909090",
    first_name: "Hirohisa",
    last_name: "Kitsuka",
    avatar_img: "https://picsum.photos/200",
    comment: "Almost human",
    is_premium: false,
    is_admin: false,
  },
];

export const demoData = [
  createData(
    "task_A",
    "A機能製造",
    "project_sdfnasidfuahs",
    "テストプロジェクトA",
    "category_jdpoasirg1",
    "製造",
    "user_assigned",
    "木塚 寛久",
    "user_author",
    "木塚 寛久",
    "Not started",
    "機能Aを製造します。",
    1,
    1,
    "2021-10-14",
    "2021-11-02",
    "2021-07-10",
    "2021-07-10",
    "2021-07-10 12:00",
    "2021-07-10 12:00"
  ),
  createData(
    "task_B",
    "B機能製造",
    "project_sdfnasidfuahssss",
    "テストプロジェクトB",
    "category_jdpoasirg1",
    "製造",
    "user_assigned",
    "木塚 寛久",
    "user_author",
    "木塚 寛久",
    "Not started",
    "機能Bを製造します。",
    2,
    2,
    "2021-11-02",
    "2021-11-02",
    "2021-07-10",
    "2021-07-10",
    "2021-07-10 12:00",
    "2021-07-10 12:00"
  ),
  createData(
    "task_C",
    "C機能製造",
    "project_sdfnasidfuahssss",
    "テストプロジェクトB",
    "category_jdpoasirg1",
    "製造",
    "user_assigned",
    "木塚 寛久",
    "user_author",
    "木塚 寛久",
    "Not started",
    "機能Bを製造します。",
    2,
    2,
    "2021-11-02",
    "2021-11-02",
    "2021-11-02",
    "2021-07-10",
    "2021-07-10 12:00",
    "2021-07-10 12:00"
  ),
  createData(
    "task_D",
    "D機能製造",
    "project_sdfnasidfuahssss",
    "テストプロジェクトB",
    "category_jdpoasirg1",
    "製造",
    "user_assigned",
    "木塚 寛久",
    "user_author",
    "木塚 寛久",
    "Not started",
    "機能Bを製造します。",
    2,
    2,
    "2021-11-02",
    "2021-11-02",
    "2021-11-07",
    "2021-07-10",
    "2021-07-10 12:00",
    "2021-07-10 12:00"
  ),
  createData(
    "task_E",
    "E機能テスト",
    "project_sdfnasidfuahsfff",
    "テストプロジェクトC",
    "category_jdpoasirg2",
    "テスト",
    "user_assigned",
    "木塚 寛久",
    "user_author",
    "木塚 寛久",
    "Not started",
    "機能Aをテストします。",
    null,
    null,
    "2021-11-02",
    "2021-11-14",
    "2021-07-10",
    "2021-07-10",
    "2021-07-10 12:00",
    "2021-07-10 12:00"
  ),
  createData(
    "task_F",
    "F機能テスト",
    "project_sdfnasidfuahsfff",
    "テストプロジェクトD",
    "category_jdpoasirg2",
    "テスト",
    "user_assigned",
    "木塚 寛久",
    "user_author",
    "木塚 寛久",
    "On going",
    "機能Aをテストします。",
    null,
    null,
    "2021-11-04",
    "2021-11-06",
    "2021-07-10",
    "2021-07-10",
    "2021-07-10 12:00",
    "2021-07-10 12:00"
  ),
  createData(
    "task_G",
    "G機能テスト",
    "project_sdfnasidfuahsfff",
    "テストプロジェクトE",
    "category_jdpoasirg2",
    "テスト",
    "user_assigned",
    "木塚 寛久",
    "user_author",
    "木塚 寛久",
    "On going",
    "機能Aをテストします。",
    null,
    null,
    "2021-11-23",
    "2021-12-02",
    "2021-07-10",
    "2021-07-10",
    "2021-07-10 12:00",
    "2021-07-10 12:00"
  ),
  createData(
    "task_H",
    "H機能テスト",
    "project_sdfnasidfuahsfff",
    "テストプロジェクトF",
    "category_jdpoasirg2",
    "テスト",
    "user_assigned",
    "木塚 寛久",
    "user_author",
    "木塚 寛久",
    "Done",
    "機能Aをテストします。",
    null,
    null,
    "2021-12-01",
    "2021-12-07",
    "2021-07-10",
    "2021-07-10",
    "2021-07-10 12:00",
    "2021-07-10 12:00"
  ),
];

function createData(
  task_id: string,
  task_name: string,
  project_id: string,
  project_name: string,
  category_id: string,
  category_name: string,
  assigned_id: string,
  assigned_name: string,
  author_id: string,
  author_name: string,
  status: TASK_STATUS,
  description: string,
  estimate_manhour: null | number,
  actual_manhour: null | number,
  scheduled_startdate: string,
  scheduled_enddate: string,
  actual_startdate: string,
  actual_enddate: string,
  created_at: string,
  update_at: string
): TASK {
  return {
    task_id: task_id,
    task_name: task_name,
    project_id: project_id,
    project_name: project_name,
    category_id: category_id,
    category_name: category_name,
    assigned_id: assigned_id,
    assigned_name: assigned_name,
    author_id: author_id,
    author_name: author_name,
    description: description,
    status: status,
    estimate_manhour: estimate_manhour,
    actual_manhour: actual_manhour,
    scheduled_startdate: scheduled_startdate,
    scheduled_enddate: scheduled_enddate,
    actual_startdate: actual_startdate,
    actual_enddate: actual_enddate,
    created_at: created_at,
    update_at: update_at,
  };
}
