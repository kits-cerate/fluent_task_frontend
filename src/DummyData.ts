import { TASK, ORG, ORG_USER, PROJECT, TASK_STATUS } from "./features/types";

export const dummyUsers: ORG_USER[] = [
  {
    user_id: "user1",
    first_name: "Hirohisa",
    last_name: "Kitsuka",
    avatar_img: "",
    comment: "Almost engineer",
    is_org_rep: true,
    is_org_admin: true,
  },
  {
    user_id: "user2",
    first_name: "DEMO",
    last_name: "USER01",
    avatar_img: "",
    comment: "demo demo datte",
    is_org_rep: false,
    is_org_admin: true,
  },
  {
    user_id: "user3",
    first_name: "DEMO",
    last_name: "USER02",
    avatar_img: "https://picsum.photos/200",
    comment: "demo demo datte",
    is_org_rep: false,
    is_org_admin: false,
  },
  {
    user_id: "user4",
    first_name: "DEMO",
    last_name: "USER03",
    avatar_img: "https://picsum.photos/200",
    comment: "demo demo datte",
    is_org_rep: false,
    is_org_admin: false,
  },
  {
    user_id: "user5",
    first_name: "DEMO",
    last_name: "USER04",
    avatar_img: "https://picsum.photos/200",
    comment: "demo demo datte",
    is_org_rep: false,
    is_org_admin: false,
  },
  {
    user_id: "user6",
    first_name: "DEMO",
    last_name: "USER05",
    avatar_img: "https://picsum.photos/200",
    comment: "demo demo datte",
    is_org_rep: false,
    is_org_admin: false,
  },
  {
    user_id: "user7",
    first_name: "DEMO",
    last_name: "USER06",
    avatar_img: "https://picsum.photos/200",
    comment: "demo demo datte",
    is_org_rep: false,
    is_org_admin: false,
  },
  {
    user_id: "user8",
    first_name: "DEMO",
    last_name: "USER07",
    avatar_img: "https://picsum.photos/200",
    comment: "demo demo datte",
    is_org_rep: false,
    is_org_admin: false,
  },
];

export const dummyOrg: ORG = {
  org_id: "org_demo",
  org_name: "組織ABCDEFG",
  org_user: dummyUsers,
};

export const demoProjects = [
  {
    project_id: "project_A",
    project_name: "プロジェクトA",
    org_id: "org_demo",
    resp_id: ["user1", "user2", "user3"],
    member_id: [
      "user1",
      "user2",
      "user3",
      "user4",
      "user5",
      "user6",
      "user7",
      "user8",
    ],
    task_category: [
      { task_category_id: "1", task_category_name: "設計" },
      { task_category_id: "2", task_category_name: "製造" },
      { task_category_id: "3", task_category_name: "テスト" },
    ],
    description: "これはデモプロジェクトです。",
    startdate: "2021-11-01",
    enddate: "2021-11-29",
  },
  {
    project_id: "project_B",
    project_name: "テストプロジェクトB",
    org_id: "org_demo",
    resp_id: ["user1", "user2"],
    member_id: ["user1", "user2", "user3", "user5", "user6", "user7"],
    task_category: [
      { task_category_id: "4", task_category_name: "設計" },
      { task_category_id: "5", task_category_name: "製造" },
      { task_category_id: "6", task_category_name: "テスト" },
    ],
    description: "これはデモプロジェクトです。",
    startdate: "2021-09-01",
    enddate: "2022-01-06",
  },
];

export const demoData: TASK[] = [
  {
    task_id: "task_A",
    task_name: "A機能製造",
    project_id: "project_A",
    category_id: "1",
    category_name: "製造",
    assigned_id: "user1",
    assigned_name: "木塚 寛久",
    author_id: "user_author",
    author_name: "木塚 寛久",
    status: "Done",
    description: "機能Aを製造します。",
    estimate_manhour: 1,
    actual_manhour: 1,
    scheduled_startdate: "2021-11-01",
    scheduled_enddate: "2021-11-02",
    actual_startdate: "2021-11-02",
    actual_enddate: "2021-11-04",
    created_at: "2021-07-10 12:00",
    update_at: "2021-07-10 12:00",
  },
  {
    task_id: "task_B",
    task_name: "B機能製造",
    project_id: "project_A",
    category_id: "1",
    category_name: "製造",
    assigned_id: "user2",
    assigned_name: "木塚 寛久",
    author_id: "user_author",
    author_name: "木塚 寛久",
    status: "Done",
    description: "機能Bを製造します。",
    estimate_manhour: 2,
    actual_manhour: 2,
    scheduled_startdate: "2021-11-02",
    scheduled_enddate: "2021-11-02",
    actual_startdate: "2021-11-04",
    actual_enddate: "2021-11-05",
    created_at: "2021-07-10 12:00",
    update_at: "2021-07-10 12:00",
  },
  {
    task_id: "task_C",
    task_name: "C機能製造",
    project_id: "project_A",
    category_id: "1",
    category_name: "製造",
    assigned_id: "user3",
    assigned_name: "木塚 寛久",
    author_id: "user_author",
    author_name: "木塚 寛久",
    status: "Done",
    description: "機能Bを製造します。",
    estimate_manhour: 2,
    actual_manhour: 2,
    scheduled_startdate: "2021-11-02",
    scheduled_enddate: "2021-11-02",
    actual_startdate: "2021-11-07",
    actual_enddate: "2021-11-08",
    created_at: "2021-07-10 12:00",
    update_at: "2021-07-10 12:00",
  },
  {
    task_id: "task_D",
    task_name: "D機能製造",
    project_id: "project_A",
    category_id: "1",
    category_name: "製造",
    assigned_id: "user4",
    assigned_name: "木塚 寛久",
    author_id: "user_author",
    author_name: "木塚 寛久",
    status: "Not started",
    description: "機能Bを製造します。",
    estimate_manhour: 2,
    actual_manhour: 2,
    scheduled_startdate: "2021-11-02",
    scheduled_enddate: "2021-11-02",
    actual_startdate: "2021-11-07",
    actual_enddate: "2021-11-11",
    created_at: "2021-07-10 12:00",
    update_at: "2021-07-10 12:00",
  },
  {
    task_id: "task_E",
    task_name: "E機能テスト",
    project_id: "project_A",
    category_id: "2",
    category_name: "テスト",
    assigned_id: "user5",
    assigned_name: "木塚 寛久",
    author_id: "user_author",
    author_name: "木塚 寛久",
    status: "Not started",
    description: "機能Aをテストします。",
    estimate_manhour: 1,
    actual_manhour: null,
    scheduled_startdate: "2021-11-02",
    scheduled_enddate: "2021-11-14",
    actual_startdate: "2021-07-10",
    actual_enddate: "2021-11-14",
    created_at: "2021-07-10 12:00",
    update_at: "2021-07-10 12:00",
  },
  {
    task_id: "task_F",
    task_name: "F機能テスト",
    project_id: "project_A",
    category_id: "2",
    category_name: "テスト",
    assigned_id: "user6",
    assigned_name: "木塚 寛久",
    author_id: "user_author",
    author_name: "木塚 寛久",
    status: "On going",
    description: "機能Aをテストします。",
    estimate_manhour: 2,
    actual_manhour: null,
    scheduled_startdate: "2021-11-04",
    scheduled_enddate: "2021-11-06",
    actual_startdate: "2021-07-10",
    actual_enddate: "2021-11-18",
    created_at: "2021-07-10 12:00",
    update_at: "2021-07-10 12:00",
  },
  {
    task_id: "task_G",
    task_name: "G機能テスト",
    project_id: "project_A",
    category_id: "2",
    category_name: "テスト",
    assigned_id: "user7",
    assigned_name: "木塚 寛久",
    author_id: "user_author",
    author_name: "木塚 寛久",
    status: "On going",
    description: "機能Aをテストします。",
    estimate_manhour: 3,
    actual_manhour: null,
    scheduled_startdate: "2021-11-23",
    scheduled_enddate: "2021-12-02",
    actual_startdate: "2021-07-10",
    actual_enddate: "2021-11-20",
    created_at: "2021-07-10 12:00",
    update_at: "2021-07-10 12:00",
  },
  {
    task_id: "task_H",
    task_name: "H機能テスト",
    project_id: "project_A",
    category_id: null,
    category_name: "テスト",
    assigned_id: "************************",
    assigned_name: "木塚 寛久",
    author_id: "user_author",
    author_name: "木塚 寛久",
    status: "Suspended",
    description: "機能Aをテストします。",
    estimate_manhour: 2,
    actual_manhour: null,
    scheduled_startdate: "2021-12-01",
    scheduled_enddate: "2021-12-07",
    actual_startdate: "2021-07-10",
    actual_enddate: null,
    created_at: "2021-07-10 12:00",
    update_at: "2021-07-10 12:00",
  },
];

// export const demoDataB = [
//   {
//     task_id: "task_A",
//     task_name: "A機能製造",
//     project_id: "project_B",
//     project_name: "テストプロジェクトB",
//     category_id: "1",
//     category_name: "製造",
//     assigned_id: "user_assigned",
//     assigned_name: "木塚 寛久",
//     author_id: "user_author",
//     author_name: "木塚 寛久",
//     status: "Not started",
//     description: "機能Aを製造します。",
//     estimate_manhour: 1,
//     actual_manhour: 1,
//     scheduled_startdate: "2021-10-14",
//     scheduled_enddate: "2021-11-02",
//     actual_startdate: "2021-07-10",
//     actual_enddate: "2021-07-10",
//     created_at: "2021-07-10 12:00",
//     update_at: "2021-07-10 12:00",
//   },
//   {
//     task_id: "task_B",
//     task_name: "B機能製造",
//     project_id: "project_B",
//     project_name: "テストプロジェクトB",
//     category_id: "1",
//     category_name: "製造",
//     assigned_id: "user_assigned",
//     assigned_name: "木塚 寛久",
//     author_id: "user_author",
//     author_name: "木塚 寛久",
//     status: "Not started",
//     description: "機能Bを製造します。",
//     estimate_manhour: 2,
//     actual_manhour: 2,
//     scheduled_startdate: "2021-11-02",
//     scheduled_enddate: "2021-11-02",
//     actual_startdate: "2021-07-10",
//     actual_enddate: "2021-07-10",
//     created_at: "2021-07-10 12:00",
//     update_at: "2021-07-10 12:00",
//   },
//   {
//     task_id: "task_C",
//     task_name: "C機能製造",
//     project_id: "project_B",
//     project_name: "テストプロジェクトB",
//     category_id: "1",
//     category_name: "製造",
//     assigned_id: "user_assigned",
//     assigned_name: "木塚 寛久",
//     author_id: "user_author",
//     author_name: "木塚 寛久",
//     status: "Not started",
//     description: "機能Bを製造します。",
//     estimate_manhour: 2,
//     actual_manhour: 2,
//     scheduled_startdate: "2021-11-02",
//     scheduled_enddate: "2021-11-02",
//     actual_startdate: "2021-11-02",
//     actual_enddate: "2021-07-10",
//     created_at: "2021-07-10 12:00",
//     update_at: "2021-07-10 12:00",
//   },
//   {
//     task_id: "task_D",
//     task_name: "D機能製造",
//     project_id: "project_B",
//     project_name: "テストプロジェクトB",
//     category_id: "1",
//     category_name: "製造",
//     assigned_id: "user_assigned",
//     assigned_name: "木塚 寛久",
//     author_id: "user_author",
//     author_name: "木塚 寛久",
//     status: "Not started",
//     description: "機能Bを製造します。",
//     estimate_manhour: 2,
//     actual_manhour: 2,
//     scheduled_startdate: "2021-11-02",
//     scheduled_enddate: "2021-11-02",
//     actual_startdate: "2021-11-07",
//     actual_enddate: "2021-07-10",
//     created_at: "2021-07-10 12:00",
//     update_at: "2021-07-10 12:00",
//   },
//   {
//     task_id: "task_E",
//     task_name: "E機能テスト",
//     project_id: "project_B",
//     project_name: "テストプロジェクトB",
//     category_id: "category_jdpoasirg2",
//     category_name: "テスト",
//     assigned_id: "user_assigned",
//     assigned_name: "木塚 寛久",
//     author_id: "user_author",
//     author_name: "木塚 寛久",
//     status: "Not started",
//     description: "機能Aをテストします。",
//     estimate_manhour: null,
//     actual_manhour: null,
//     scheduled_startdate: "2021-11-02",
//     scheduled_enddate: "2021-11-14",
//     actual_startdate: "2021-07-10",
//     actual_enddate: "2021-07-10",
//     created_at: "2021-07-10 12:00",
//     update_at: "2021-07-10 12:00",
//   },
//   {
//     task_id: "task_F",
//     task_name: "F機能テスト",
//     project_id: "project_B",
//     project_name: "テストプロジェクトB",
//     category_id: "category_jdpoasirg2",
//     category_name: "テスト",
//     assigned_id: "user_assigned",
//     assigned_name: "木塚 寛久",
//     author_id: "user_author",
//     author_name: "木塚 寛久",
//     status: "On going",
//     description: "機能Aをテストします。",
//     estimate_manhour: null,
//     actual_manhour: null,
//     scheduled_startdate: "2021-11-04",
//     scheduled_enddate: "2021-11-06",
//     actual_startdate: "2021-07-10",
//     actual_enddate: "2021-07-10",
//     created_at: "2021-07-10 12:00",
//     update_at: "2021-07-10 12:00",
//   },
//   {
//     task_id: "task_G",
//     task_name: "G機能テスト",
//     project_id: "project_B",
//     project_name: "テストプロジェクトB",
//     category_id: "category_jdpoasirg2",
//     category_name: "テスト",
//     assigned_id: "user_assigned",
//     assigned_name: "木塚 寛久",
//     author_id: "user_author",
//     author_name: "木塚 寛久",
//     status: "On going",
//     description: "機能Aをテストします。",
//     estimate_manhour: null,
//     actual_manhour: null,
//     scheduled_startdate: "2021-11-23",
//     scheduled_enddate: "2021-12-02",
//     actual_startdate: "2021-07-10",
//     actual_enddate: "2021-07-10",
//     created_at: "2021-07-10 12:00",
//     update_at: "2021-07-10 12:00",
//   },
//   {
//     task_id: "task_H",
//     task_name: "H機能テスト",
//     project_id: "project_B",
//     project_name: "テストプロジェクトB",
//     category_id: "category_jdpoasirg2",
//     category_name: "テスト",
//     assigned_id: "user_assigned",
//     assigned_name: "木塚 寛久",
//     author_id: "user_author",
//     author_name: "木塚 寛久",
//     status: "Done",
//     description: "機能Aをテストします。",
//     estimate_manhour: null,
//     actual_manhour: null,
//     scheduled_startdate: "2021-12-01",
//     scheduled_enddate: "2021-12-07",
//     actual_startdate: "2021-07-10",
//     actual_enddate: "2021-07-10",
//     created_at: "2021-07-10 12:00",
//     update_at: "2021-07-10 12:00",
//   },
// ];
