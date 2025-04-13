"use client";
import formatDate from "@/utils/function/formatHours";
import { Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { ListOptions } from "./list-options";

export function useTableColumns() {
  const t = useTranslations("organization.general-news.table");
  const tableHead = t.raw("tableHead");

  return useMemo(() => {
    if (!Array.isArray(tableHead)) {
      console.warn("Table head not found for module: performance-period");
      return [];
    }

    const columns: GridColDef[] = [
      {
        field: tableHead[0]?.nameField,
        headerName: tableHead[0]?.title,
        flex: 0.5, // 75% dari total lebar tabel
        headerAlign: "center",
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },
      {
        field: tableHead[1]?.nameField,
        headerName: tableHead[1]?.title,
        flex: 0.25, // 75% dari total lebar tabel
        align: "center",
        headerAlign: "center",
        display: "flex",
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
        renderCell: ({ row }) => (
          <Typography>{formatDate(row.CreatedOn)}</Typography>
        ),
      },

      {
        field: tableHead[2]?.nameField,
        headerName: tableHead[2]?.title,
        flex: 0.25, // 25% dari total lebar tabel
        sortable: false,
        filterable: false,
        editable: false,
        hideable: false,
        disableColumnMenu: true,
        align: "center",
        headerAlign: "center",
        display: "flex",
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
        renderCell: ({ row }) => <ListOptions data={row} />,
      },
    ];

    return columns;
  }, [tableHead]);
}

export const rows = [
  {
    CustomerId: "1212",
    Id: 1000241,
    Title: "Kebijakan Absen Terbaru",
    Abstraction: "Kebijakan Absen Terbaru",
    NewsBody:
      '<p style="text-align:justify;">Kebijakan absen 2024 :</p><img src="/GeneralNews/qubisa.jpeg" alt="" width="50" height="50" /><ul><li>Harus Ontome</li></ul><p><a href="https://hr.altius.id/#/login" title="link altius" target="_blank">Altius</a></p><p>&nbsp;</p><p><img src="https://altiusstoragetest.blob.core.windows.net/imagecontainer/photo/company/1212/generalNews/3ae1dde0-2be8-4270-b896-b51be337902f.png" alt="" width="100" height="100" /></p>',
    CreatedOn: "2024-09-06T08:24:50.8475626",
    ModifiedOn: "2024-09-10T11:17:06.9101914",
    EmployeeId: 274,
    CreatorFullName: null,
    TimeElapsedFromCreatedDate: null,
    ShowIt: true,
    AzureURL: null,
  },
  {
    CustomerId: "1212",
    Id: 1000012,
    Title: "PSBB",
    Abstraction:
      "Setelah mempertimbangkan situasi yang berkembang, terkait PSBB, perusahaan memutuskan sebagai berikut:",
    NewsBody:
      '<p><strong><span style="text-decoration-line:underline;"><span lang="EN-ID" style="font-family:Calibri;font-size:medium;">PENGUMUMAN</span></span></strong><strong></strong></p><p><strong>&nbsp;</strong></p><p><strong><span lang="EN-ID" style="font-family:Calibri;font-size:medium;">Setelah mempertimbangkan situasi yang berkembang, terkait PSBB, perusahaan memutuskan sebagai berikut:</span></strong></p><span style="font-family:Calibri;font-size:medium;"><br /></span><ol><li><strong><span lang="EN-ID" style="font-family:Calibri;font-size:medium;">WFH &nbsp;kantor pusat diperpanjang sampai dengan hari Jumat tanggal 1 Mei dan kembali bekerja normal hari Senin tanggal 4 Mei</span></strong></li><li><strong><span lang="EN-ID" style="font-family:Calibri;font-size:medium;">WFH kantor cabang mengikuti WFH kantor pusat</span></strong></li><li><strong><span lang="EN-ID" style="font-family:Calibri;font-size:medium;">Apabila kota tempat kantor cabang menetapkan PSBB, maka WFH kantor cabang mengikuti PSBB yang berlaku dimasing-masing kota</span></strong></li></ol><p><strong>&nbsp;</strong></p><p><strong><span lang="EN-ID" style="font-family:Calibri;font-size:medium;">Ketentuan ini melengkapi ketentuan yang telah diinformasikan melalui email sebelumnya, dan apabila &nbsp;terjadi perubahana dikarenakan perkembangan situasi terbaru, akan segera kami informasikan.</span></strong></p><p><strong>&nbsp;</strong></p><p><strong><span lang="EN-ID" style="font-family:Calibri;font-size:medium;">Terimakasih</span></strong></p><p><strong>&nbsp;</strong></p><p><strong><span lang="EN-ID" style="font-family:Calibri;font-size:medium;">Hormat Kami</span></strong></p><strong><span lang="EN-ID" style="font-size:medium;font-family:Calibri;">Tinus Garnida</span></strong>',
    CreatedOn: "2023-04-16T12:42:49.1415505",
    ModifiedOn: "2024-02-20T05:10:31.932461",
    EmployeeId: 274,
    CreatorFullName: null,
    TimeElapsedFromCreatedDate: null,
    ShowIt: true,
    AzureURL: null,
  },
  {
    CustomerId: "1212",
    Id: 1000011,
    Title: "Kebijakan WFO",
    Abstraction:
      "Saat ini pemerintah telah memberlakukan work-from-home (WFH) untuk wilayah Jabodetabek disertai pelemahan perekonomian nasional yang berdampak terhadap penundaan/hilangnya proyek serta pembayaran oleh klien. Menghadapi krisis ini, prioritas utama Perusahaan adalah memastikan kelangsungan ",
    NewsBody:
      '<p><strong><span style="text-decoration-line:underline;"><span style="font-family:Calibri;font-size:medium;">PENGUMUMAN</span></span></strong></p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p><span style="font-family:Calibri;font-size:medium;">Saat ini pemerintah telah memberlakukan work-from-home (WFH) untuk wilayah Jabodetabek disertai pelemahan perekonomian nasional yang berdampak terhadap penundaan/hilangnya proyek serta pembayaran oleh klien. Menghadapi krisis ini, prioritas utama Perusahaan adalah memastikan kelangsungan penghasilan seluruh karyawan dan kelangsungan usaha Perusahaan sesuai Surat Edaran Menakertrans Nomor M/3/HK.04/III/2020, oleh karena itu maka Perusahaan terpaksa mengambil keputusan yang sulit.</span></p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p><span style="font-family:Calibri;font-size:medium;">Adapun keputusan tersebut adalah sebagai berikut:</span></p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><ol><li><span style="font-family:Calibri;font-size:medium;">Selama 2 bulan ke depan (April dan Mei) Perusahaan akan melakukan pemberlakuan unpaid leave (cuti tidak dibayar)</span></li><li><span style="font-family:Calibri;font-size:medium;">Perhitungan pemotongan upah pokok terdiri dari beberapa skema;</span><ol style="list-style-type:lower-alpha;"><li><span style="font-family:Calibri;font-size:medium;">Pemotongan 20% untuk Karyawan yang tidak bekerja 1 hari dalam seminggu</span></li><li><span style="font-family:Calibri;font-size:medium;">Pemotongan 40% untuk Karyawan yang tidak bekerja 2 hari dalam seminggu</span></li><li><span style="font-family:Calibri;font-size:medium;">Pemotongan 60% untuk Karyawan yang tidak bekerja 3 hari dalam seminggu</span></li><li><span style="font-family:Calibri;font-size:medium;">Skema pemotongan lainnya sesuai kesepakatan antara Atasan dan Bawahan masing-masing</span></li></ol></li><li><span style="font-family:Calibri;font-size:medium;">Skema untuk setiap Karyawan akan berbeda-beda sesuai kebutuhan bisnis dan akan ditentukan oleh masing-masing Chief.</span></li><li><span style="font-family:Calibri;font-size:medium;">Pemotongan tunjangan seperti Transportasi dilakukan 100% untuk seluruh tunjangan-tunjangan, kecuali tunjangan komunikasi, mengingat tidak perlunya kunjungan fisik ke klien selama wabah Covid-19 berlangsung</span></li><li><span style="font-family:Calibri;font-size:medium;">Ketentuan di atas akan berlangsung sampai akhir Mei, dan akan dievaluasi lebih lanjut sesuai dengan perkembangan situasi kondisi eksternal dan kinerja perusahaan</span></li></ol><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p><span style="font-family:Calibri;font-size:medium;">Demikian pengumuman ini disampaikan, hal-hal lain terkait dengan pelaksanaan pengumuman ini akan disampaikan dan dilakukan oleh para Chief masing-masing.</span></p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p><span style="font-family:Calibri;font-size:medium;">Hormat Kami</span></p><p><span lang="EN-ID" style="font-size:medium;font-family:Calibri;">Tinus Garnida</span></p><p>&nbsp;</p><p>&nbsp;</p>',
    CreatedOn: "2023-04-16T12:41:58.9525544",
    ModifiedOn: null,
    EmployeeId: 274,
    CreatorFullName: null,
    TimeElapsedFromCreatedDate: null,
    ShowIt: true,
    AzureURL: null,
  },
  {
    CustomerId: "1212",
    Id: 12,
    Title: "Kebijakan WFH/ WFO",
    Abstraction:
      "Mengenai kebijakan WFH/ WFO, dengan ini kami informasikan kebijakan yang akan dilakukan efektif di tanggal 1 Juni 2022:     Semua Sales Tim dan Support Tim akan melakukan full 100% WFO.   Seluruh Tim Delivery dapat melakukan hybrid working (2 hari WFO dan 3 hari WFH), dimana pelaksanannya diserahkan",
    NewsBody:
      '<p style="box-sizing:border-box;margin-bottom:0px;cursor:text;padding:0px;counter-reset:list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;white-space:pre-wrap;background-color:#ffffff;">Dear All, </p><p style="box-sizing:border-box;margin-bottom:0px;cursor:text;padding:0px;counter-reset:list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;white-space:pre-wrap;background-color:#ffffff;"><br style="box-sizing:border-box;" /></p><p style="box-sizing:border-box;margin-bottom:0px;cursor:text;padding:0px;counter-reset:list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;white-space:pre-wrap;background-color:#ffffff;">Mengenai kebijakan WFH/ WFO, dengan ini kami informasikan kebijakan yang akan dilakukan efektif di tanggal 1 Juni 2022: </p><p style="box-sizing:border-box;margin-bottom:0px;cursor:text;padding:0px;counter-reset:list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;white-space:pre-wrap;background-color:#ffffff;"><br style="box-sizing:border-box;" /></p><ul style="box-sizing:border-box;margin:0px;cursor:text;padding:0px 0px 0px 1.5em;counter-reset:list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;white-space:pre-wrap;background-color:#ffffff;"><li style="box-sizing:border-box;list-style-type:none;padding-left:1.5em;">Semua Sales Tim dan Support Tim akan melakukan full 100% WFO.</li></ul><p style="box-sizing:border-box;margin-bottom:0px;cursor:text;padding:0px;counter-reset:list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;white-space:pre-wrap;background-color:#ffffff;"><br style="box-sizing:border-box;" /></p><ul style="box-sizing:border-box;margin:0px;cursor:text;padding:0px 0px 0px 1.5em;counter-reset:list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;white-space:pre-wrap;background-color:#ffffff;"><li style="box-sizing:border-box;list-style-type:none;padding-left:1.5em;">Seluruh Tim Delivery dapat melakukan hybrid working (2 hari WFO dan 3 hari WFH), dimana pelaksanannya diserahkan ke masing - masing Chief/ Head.</li></ul><p style="box-sizing:border-box;margin-bottom:0px;cursor:text;padding:0px;counter-reset:list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;white-space:pre-wrap;background-color:#ffffff;"><br style="box-sizing:border-box;" /></p><p style="box-sizing:border-box;margin-bottom:0px;cursor:text;padding:0px;counter-reset:list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;white-space:pre-wrap;background-color:#ffffff;">Demikian yang dapat kami sampaikan, atas perhatian dan kerjasamanya kami ucapkan terima kasih. </p><p style="box-sizing:border-box;margin-bottom:0px;cursor:text;padding:0px;counter-reset:list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;white-space:pre-wrap;background-color:#ffffff;"><br style="box-sizing:border-box;" /></p><p style="box-sizing:border-box;margin-bottom:0px;cursor:text;padding:0px;counter-reset:list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;white-space:pre-wrap;background-color:#ffffff;"><br style="box-sizing:border-box;" /></p><p style="box-sizing:border-box;margin-bottom:0px;cursor:text;padding:0px;counter-reset:list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;white-space:pre-wrap;background-color:#ffffff;">Salam, </p><p style="box-sizing:border-box;margin-bottom:0px;cursor:text;padding:0px;counter-reset:list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;white-space:pre-wrap;background-color:#ffffff;">HR PT Altius-Demo</p>',
    CreatedOn: "2022-12-13T07:01:56.9296306",
    ModifiedOn: null,
    EmployeeId: 274,
    CreatorFullName: null,
    TimeElapsedFromCreatedDate: null,
    ShowIt: true,
    AzureURL: null,
  },
];
