export type WorksType = {
  id: number;
  FieldName: string;
  Location: string;
  Option1: string;
  Option2?: string;
};

export const AsbestosWorksList: WorksType[] = [
  {
    id: 1,
    FieldName: "AAAAAAAAAAAAAA",
    Location: "東京都",
    Option1: "LV.1",
    Option2: "5000m2",
  },
  {
    id: 2,
    FieldName: "BBBBBBBBBBBB",
    Location: "大阪府",
    Option1: "LV.1",
    Option2: "5000m2",
  },
  {
    id: 3,
    FieldName: "CCCCCCCCCCCCCCC",
    Location: "愛知県",
    Option1: "LV.1",
    Option2: "5000m2",
  },
  {
    id: 4,
    FieldName: "DDDDDDDDDDDDDD",
    Location: "北海道",
    Option1: "LV.1",
    Option2: "5000m2",
  },
  {
    id: 5,
    FieldName: "EEEEEEEEEEEEEE",
    Location: "福岡県",
    Option1: "LV.1",
    Option2: "5000m2",
  },
];

export const DioxinWorksList: WorksType[] = [
  {
    id: 1,
    FieldName: "AAAAAAAAAAAAAA",
    Location: "東京都",
    Option1: "管理区域A",
    Option2: "1000t/day",
  },
  {
    id: 2,
    FieldName: "BBBBBBBBBBBB",
    Location: "大阪府",
    Option1: "管理区域B",
    Option2: "2000t/day",
  },
  {
    id: 3,
    FieldName: "CCCCCCCCCCCCCCC",
    Location: "愛知県",
    Option1: "管理区域C",
    Option2: "1500t/day",
  },
  {
    id: 4,
    FieldName: "DDDDDDDDDDDDDD",
    Location: "北海道",
    Option1: "管理区域D",
    Option2: "1200t/day",
  },
];

export const DemolitionWorksList: WorksType[] = [
  {
    id: 1,
    FieldName: "AAAAAAAAAAAAAA",
    Location: "東京都",
    Option1: "大規模",
  },
  {
    id: 2,
    FieldName: "BBBBBBBBBBBB",
    Location: "大阪府",
    Option1: "中規模",
  },
  {
    id: 3,
    FieldName: "CCCCCCCCCCCCCCC",
    Location: "愛知県",
    Option1: "小規模",
  },
  {
    id: 4,
    FieldName: "DDDDDDDDDDDDDD",
    Location: "北海道",
    Option1: "大規模",
  },
  {
    id: 5,
    FieldName: "EEEEEEEEEEEEEE",
    Location: "福岡県",
    Option1: "中規模",
  },
  {
    id: 6,
    FieldName: "FFFFFFFFFFFFFF",
    Location: "沖縄県",
    Option1: "小規模",
  },
];
