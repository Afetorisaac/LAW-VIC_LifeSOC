"use client";

import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#1d4ed8',
    fontWeight: 'bold',
  },
  section: {
    margin: 10,
    padding: 10,
  },
  header: {
    fontSize: 16,
    marginBottom: 10,
    borderBottom: 1,
    paddingBottom: 5,
    color: '#334155',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e2e8f0',
  },
  label: {
    fontSize: 12,
    color: '#64748b',
  },
  value: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    fontSize: 10,
    color: '#94a3b8',
    borderTop: 1,
    paddingTop: 10,
  }
});

interface CurrencyData {
  currency: string;
  value: number;
}

const ReportDocument = ({ data }: { data: CurrencyData[] }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>LifeSOC Holistic Report</Text>
      
      <View style={styles.section}>
        <Text style={styles.header}>8 Currencies Status</Text>
        {data.map((item) => (
          <View key={item.currency} style={styles.row}>
            <Text style={styles.label}>{item.currency}</Text>
            <Text style={styles.value}>{item.value}/100</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Summary & Recommendations</Text>
        <Text style={{ fontSize: 12, lineHeight: 1.5 }}>
          Your highest currency is Character/Integrity (95%), showing strong alignment with your core values. 
          Attention currency (45%) is currently your lowest area; consider implementing &quot;Deep Work&quot; blocks 
          in your timetable to improve focus.
        </Text>
      </View>

      <Text style={styles.footer}>
        Generated on {new Date().toLocaleDateString()} • LifeSOC Productivity App
      </Text>
    </Page>
  </Document>
);

export function HolisticReportDownload({ data }: { data: CurrencyData[] }) {
  return (
    <PDFDownloadLink 
      document={<ReportDocument data={data} />} 
      fileName={`LifeSOC_Report_${new Date().toISOString().split('T')[0]}.pdf`}
    >
      {({ loading }) => (
        <Button disabled={loading}>
          <Download className="mr-2 h-4 w-4" />
          {loading ? "Preparing Report..." : "Download PDF Report"}
        </Button>
      )}
    </PDFDownloadLink>
  );
}
