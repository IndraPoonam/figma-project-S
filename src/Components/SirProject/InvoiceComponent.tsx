// import React, { Component } from 'react';
// import {
//     Container,Typography, Box,Divider, Table,TableBody,TableCell,TableContainer,TableRow, Paper,} from '@mui/material';

// class InvoiceComponent extends Component {
//     render() {
//         return (
//             <Container maxWidth="md" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//                 <Box padding={2}>
//                     <img src="https://image.isu.pub/240403200347-7a1bd2ea4465a6b0a43c156278a4815e/jpg/page_1_thumb_large.jpg" alt="Logo" style={{ maxHeight: '100px' }} />
//                 </Box>

//                 <Box textAlign="center" display={'flex'} justifyContent="space-between" padding={2}>
//                     <Typography sx={{ fontSize: '20px', fontWeight: 600, color: '#0F172A' }}>Subscription Invoice</Typography>
//                     <Typography sx={{ fontSize: '20px', fontWeight: 600, color: '#0F172A' }}>INV-1001</Typography>
//                 </Box>
//                 <Divider />

//                 <Box display="flex" justifyContent="space-between" padding={2} >
//                     <Box><Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#647488' }}>
//                         Listing name:   <span style={{ fontSize: '16px', fontWeight: 600, color: '#0F172A' }}>Medical Debt Package</span>
//                     </Typography></Box>
//                     <Box display="flex" justifyContent="space-between" gap={4} >
//                         <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#647488' }}>  Invoice Date:
//                             <span style={{ fontSize: '16px', fontWeight: 600, color: '#0F172A' }}>July 1, 2024</span></Typography>
//                         <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#647488' }}>  Due Date:
//                             <span style={{ fontSize: '16px', fontWeight: 600, color: '#0F172A' }}>July 31, 2024</span></Typography>
//                     </Box>
//                 </Box>

//                 <Box display={'flex'} justifyContent="space-between" padding={2}>
//                     <Box display={'flex'} flexDirection={'column'} gap={1}>
//                         <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#1D4ED8' }}>From:</Typography>
//                         <Typography sx={{ fontSize: '18px', fontWeight: 700, color: '#0F172A' }}>John Doe</Typography>
//                         <Typography sx={{ fontSize: '14px', fontWeight: '400', color: '#1E293B' }}>1234 Market Street</Typography>
//                         <Typography sx={{ fontSize: '14px', fontWeight: '400', color: '#1E293B' }}>City, State, ZIP</Typography>
//                         <Typography sx={{ fontSize: '14px', fontWeight: '400', color: '#1E293B' }}>(123) 456-7890</Typography>
//                         <Typography sx={{ fontSize: '14px', fontWeight: '400', color: '#1E293B' }}>info@debtcollections.com</Typography>
//                     </Box>
//                     <Box display={'flex'} flexDirection={'column'} gap={1}>
//                         <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#1D4ED8' }}>To:</Typography>
//                         <Typography sx={{ fontSize: '18px', fontWeight: 700, color: '#0F172A' }}>Company Name</Typography>
//                         <Typography sx={{ fontSize: '14px', fontWeight: '400', color: '#1E293B' }}>1234 Market Street</Typography>
//                         <Typography sx={{ fontSize: '14px', fontWeight: '400', color: '#1E293B' }}>City, State, ZIP</Typography>
//                         <Typography sx={{ fontSize: '14px', fontWeight: '400', color: '#1E293B' }}>(321) 654-0987</Typography>
//                         <Typography sx={{ fontSize: '14px', fontWeight: '400', color: '#1E293B' }}>jane.smith@example.com</Typography>
//                     </Box>
//                 </Box>

//                 <Box padding={2}>
//                     <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
//                         <Table>
//                             <TableBody>
//                                 <TableRow>
//                                     <TableCell sx={{ fontSize: '14px', fontWeight: 600, color: '#647488' }}>Description</TableCell>
//                                     <TableCell sx={{ fontSize: '14px', fontWeight: 600, color: '#647488' }}>Quantity</TableCell>
//                                     <TableCell sx={{ fontSize: '14px', fontWeight: 600, color: '#647488' }}>Unit Price</TableCell>
//                                     <TableCell sx={{ fontSize: '14px', fontWeight: 600, color: '#647488' }}>Total</TableCell>
//                                 </TableRow>
//                                 <TableRow>
//                                     <TableCell sx={{ fontSize: '14px', fontWeight: 500, color: 'red' }}>Yearly Subscription</TableCell>
//                                     <TableCell sx={{ fontSize: '14px', fontWeight: 500, color: 'red' }}>1</TableCell>
//                                     <TableCell sx={{ fontSize: '14px', fontWeight: 500, color: 'red' }}>SAR 500.00</TableCell>
//                                     <TableCell sx={{ fontSize: '14px', fontWeight: 500, color: 'red' }}>SAR 500.00</TableCell>
//                                 </TableRow>
//                             </TableBody>
//                         </Table>
//                     </TableContainer></Box>


//                 <Box display={'flex'} justifyContent="flex-end" padding={2}>
//                     <Box display={'flex'} flexDirection={'column'} gap={1}>
//                         <Box display={'flex'} justifyContent="space-between" gap={6}>
//                             <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#1E293B' }}>Subtotal Amount Due</Typography>
//                             <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#0F172A' }}>SAR 500.00</Typography>
//                         </Box>
//                         <Box display={'flex'} justifyContent="space-between" gap={6}>
//                             <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#1E293B' }}>Taxes(15%):</Typography>
//                             <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#0F172A' }}>SAR 75.00</Typography>
//                         </Box>
//                         <Box display={'flex'} justifyContent="space-between" gap={6}>
//                             <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#1E293B' }}>Total Amount Due</Typography>
//                             <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#0F172A' }}>SAR 575.00</Typography>
//                         </Box></Box>
//                 </Box>

//                 <Box display={'flex'} justifyContent="space-between" padding={2}>
//                     <Box sx={{ height: '28px', width: '240px' }} display={'flex'} flexDirection={'column'} gap={1}>
//                         <Typography sx={{ fontSize: '20px', fontWeight: 600, color: '#0F172A' }}>Payment Instructions:</Typography>
//                         <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#0F172A' }}>Please include the invoice number in your payment.</Typography></Box>
//                     <Box display={'flex'} flexDirection={'column'} gap={1}>
//                         <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#64748B' }}>Due Date:
//                             <span style={{ fontSize: '14px', fontWeight: 500, color: '#0F172A' }}>July 31, 2024</span></Typography>

//                         <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#64748B' }}>Payment Methods:
//                             <span style={{ fontSize: '14px', fontWeight: 500, color: '#0F172A' }}>Bank Transfer, Credit Card</span></Typography>
//                         <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#64748B' }}>Bank Name:
//                             <span style={{ fontSize: '14px', fontWeight: 500, color: '#0F172A' }}>ABC Bank</span>
//                         </Typography>
//                         <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#64748B' }}>Account Number:
//                             <span style={{ fontSize: '14px', fontWeight: 500, color: '#0F172A' }}>98765432</span></Typography></Box>
//                 </Box>
//                 <Box >
//                     <img src="https://w7.pngwing.com/pngs/619/184/png-transparent-qr-code-barcode-scanners-scanner-q-text-rectangle-logo-thumbnail.png" alt="QR Code" style={{ height: '81px', width: '84px' }} />
//                 </Box>
//             </Container>
//         );
//     }
// }

// export default InvoiceComponent;


////////////////////A/C to builder/////////////////////////

import React, { Component } from 'react';
import {
    Container, Typography, Box, Divider, Table, TableBody, TableCell, TableContainer, TableRow, Paper,
} from '@mui/material';
const styles = {
    container: {
      
        fontFamily: 'Arial, sans-serif',
    },
    logo: {
        height:'57px',
        width:'172px'
    },
    header: {
        fontSize: '20px',
        fontWeight: 600,
        color: '#0F172A',
    },
    section: {
        padding: '16px',
    },
    title: {
        fontSize: '14px',
        fontWeight: 400,
        color: '#647488',
    },
    titleHighlight: {
        fontSize: '16px',
        fontWeight: 600,
        color: '#0F172A',
    },
    sectionTitle: {
        fontSize: '14px',
        fontWeight: 500,
        color: '#1D4ED8',
    },
    infoText: {
        fontSize: '14px',
        fontWeight: 400,
        color: '#1E293B',
    },
    boldInfoText: {
        fontSize: '18px',
        fontWeight: 700,
        color: '#0F172A',
    },
    tableHeader: {
        fontSize: '14px',
        fontWeight: 600,
        color: '#647488',
    },
    tableContent: {
        fontSize: '14px',
        fontWeight: 500,
        color: 'red',
    },
    summaryText: {
        fontSize: '14px',
        fontWeight: 400,
        color: '#1E293B',
    },
    summaryAmount: {
        fontSize: '16px',
        fontWeight: 600,
        color: '#0F172A',
    },
    paymentInstructionsTitle: {
        fontSize: '20px',
        fontWeight: 600,
        color: '#0F172A',
    },
    paymentInstructionsText: {
        fontSize: '14px',
        fontWeight: 400,
        color: '#0F172A',
        height: '28px', 
        width: '240px'
    },
    paymentDetailsTitle: {
        fontSize: '14px',
        fontWeight: 400,
        color: '#64748B',
    },
    paymentDetailsHighlight: {
        fontSize: '14px',
        fontWeight: 500,
        color: '#0F172A',
    },
    qrCode: {
        height: '81px',
        width: '84px',
    },
};
class InvoiceComponent extends Component {
    render() {
        return (
            <Container maxWidth="md" style={styles.container}>
                <Box padding={2}>
                    <img
                        src="https://image.isu.pub/240403200347-7a1bd2ea4465a6b0a43c156278a4815e/jpg/page_1_thumb_large.jpg"
                        alt="Logo"
                        style={styles.logo}
                    />
                </Box>
                <Box textAlign="center" display="flex" justifyContent="space-between" style={styles.section}>
                    <Typography style={styles.header}>Subscription Invoice</Typography>
                    <Typography style={styles.header}>INV-1001</Typography>
                </Box>
                <Divider />
                <Box display="flex" justifyContent="space-between" style={styles.section}>
                    <Box>
                        <Typography style={styles.title}>
                            Listing name: <span style={styles.titleHighlight}>Medical Debt Package</span>
                        </Typography>
                    </Box>
                    <Box display="flex" gap={4}>
                        <Typography style={styles.title}>
                            Invoice Date: <span style={styles.titleHighlight}>July 1, 2024</span>
                        </Typography>
                        <Typography style={styles.title}>
                            Due Date: <span style={styles.titleHighlight}>July 31, 2024</span>
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="space-between" style={styles.section}>
                    <Box display="flex" flexDirection="column" gap={1}>
                        <Typography style={styles.sectionTitle}>From:</Typography>
                        <Typography style={styles.boldInfoText}>John Doe</Typography>
                        <Typography style={styles.infoText}>1234 Market Street</Typography>
                        <Typography style={styles.infoText}>City, State, ZIP</Typography>
                        <Typography style={styles.infoText}>(123) 456-7890</Typography>
                        <Typography style={styles.infoText}>info@debtcollections.com</Typography>
                    </Box>
                    <Box display="flex" flexDirection="column" gap={1}>
                        <Typography style={styles.sectionTitle}>To:</Typography>
                        <Typography style={styles.boldInfoText}>Company Name</Typography>
                        <Typography style={styles.infoText}>1234 Market Street</Typography>
                        <Typography style={styles.infoText}>City, State, ZIP</Typography>
                        <Typography style={styles.infoText}>(321) 654-0987</Typography>
                        <Typography style={styles.infoText}>jane.smith@example.com</Typography>
                    </Box>
                </Box>
                <Box style={styles.section}>
                    <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell style={styles.tableHeader}>Description</TableCell>
                                    <TableCell style={styles.tableHeader}>Quantity</TableCell>
                                    <TableCell style={styles.tableHeader}>Unit Price</TableCell>
                                    <TableCell style={styles.tableHeader}>Total</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={styles.tableContent}>Yearly Subscription</TableCell>
                                    <TableCell style={styles.tableContent}>1</TableCell>
                                    <TableCell style={styles.tableContent}>SAR 500.00</TableCell>
                                    <TableCell style={styles.tableContent}>SAR 500.00</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box display="flex" justifyContent="flex-end" style={styles.section}>
                    <Box display="flex" flexDirection="column" gap={1}>
                        <Box display="flex" justifyContent="space-between" gap={6}>
                            <Typography style={styles.summaryText}>Subtotal Amount Due</Typography>
                            <Typography style={styles.summaryAmount}>SAR 500.00</Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between" gap={6}>
                            <Typography style={styles.summaryText}>Taxes (15%):</Typography>
                            <Typography style={styles.summaryAmount}>SAR 75.00</Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between" gap={6}>
                            <Typography style={styles.summaryText}>Total Amount Due</Typography>
                            <Typography style={styles.summaryAmount}>SAR 575.00</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="space-between" style={styles.section}>
                    <Box display="flex" flexDirection="column" gap={1}>
                        <Typography style={styles.paymentInstructionsTitle}>Payment Instructions:</Typography>
                        <Typography style={styles.paymentInstructionsText}>
                            Please include the invoice number in your payment.
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="column" gap={1}>
                        <Typography style={styles.paymentDetailsTitle}>
                            Due Date: <span style={styles.paymentDetailsHighlight}>July 31, 2024</span>
                        </Typography>
                        <Typography style={styles.paymentDetailsTitle}>
                            Payment Methods: <span style={styles.paymentDetailsHighlight}>Bank Transfer, Credit Card</span>
                        </Typography>
                        <Typography style={styles.paymentDetailsTitle}>
                            Bank Name: <span style={styles.paymentDetailsHighlight}>ABC Bank</span>
                        </Typography>
                        <Typography style={styles.paymentDetailsTitle}>
                            Account Number: <span style={styles.paymentDetailsHighlight}>98765432</span>
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <img
                        src="https://w7.pngwing.com/pngs/619/184/png-transparent-qr-code-barcode-scanners-scanner-q-text-rectangle-logo-thumbnail.png"
                        alt="QR Code"
                        style={styles.qrCode}
                    />
                </Box>
            </Container>
        );
    }
}

export default InvoiceComponent;
