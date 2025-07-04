import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './FAQPage.css';

const FAQPage = () => {
  const { theme } = useTheme();
  const faqs = [
    {
      question: "What is financial management and why is it important?",
      answer: `Financial management involves planning, organizing, directing, and controlling 
      the financial activities of an organization. It ensures that the company has enough 
      funds for its operations, invests wisely, and achieves its financial goals. Effective 
      financial management is crucial because it maximizes shareholder wealth, controls risks, 
      and ensures business sustainability over the long term. Without it, businesses can face 
      liquidity crises or inefficient capital allocation.`
    },
    {
      question: "How do I create a budget for my small business?",
      answer: `Creating a budget involves analyzing your expected income and expenses over a 
      certain period. Start by listing all revenue sources, then estimate fixed and variable 
      costs such as rent, salaries, utilities, marketing, and raw materials. Use historical data 
      if available and consider seasonal fluctuations. A budget helps you control spending, 
      forecast cash flow, and plan for investments or savings, ultimately ensuring you don’t 
      overspend and stay financially healthy.`
    },
    {
      question: "What is cash flow and why is it critical?",
      answer: `Cash flow refers to the movement of money in and out of your business. Positive 
      cash flow means you have more money coming in than going out, enabling you to pay bills, 
      invest in growth, and manage emergencies. Negative cash flow can lead to insolvency, even 
      if your business is profitable on paper. Monitoring cash flow regularly helps maintain 
      liquidity and avoid financial trouble.`
    },
    {
      question: "What are the main types of financial statements?",
      answer: `The key financial statements include the Balance Sheet, Income Statement, and 
      Cash Flow Statement. The Balance Sheet shows your assets, liabilities, and equity at a 
      point in time. The Income Statement reports revenues and expenses over a period, revealing 
      profit or loss. The Cash Flow Statement details the inflows and outflows of cash. Together, 
      these provide a comprehensive picture of your business's financial health and performance.`
    },
    {
      question: "How can I improve my company's profitability?",
      answer: `Improving profitability can be achieved by increasing revenues, reducing costs, 
      or both. Strategies include optimizing pricing, expanding market reach, improving product 
      quality, and enhancing customer service. On the cost side, streamline operations, negotiate 
      better supplier contracts, reduce waste, and invest in technology to increase efficiency. 
      Regular financial analysis helps identify areas with the greatest impact potential.`
    },
    {
      question: "What is working capital and how do I manage it?",
      answer: `Working capital is the difference between current assets and current liabilities. 
      It measures your company’s short-term financial health and liquidity. Positive working 
      capital means you can cover short-term debts and operate smoothly. To manage it effectively, 
      balance receivables, payables, and inventory levels carefully. Avoid tying too much cash in 
      inventory or allowing slow-paying customers to strain cash flow.`
    },
    {
      question: "What financing options are available for startups?",
      answer: `Startups can access various financing sources including personal savings, angel 
      investors, venture capital, bank loans, crowdfunding, and government grants. Each option 
      has its pros and cons in terms of cost, control, and risk. For example, loans require 
      repayment with interest, while investors may require equity and decision-making input. 
      Selecting the right mix depends on your business model, growth plans, and risk tolerance.`
    },
    {
      question: "How do taxes impact business financial planning?",
      answer: `Taxes are a significant cost for businesses and can affect profitability and cash 
      flow. Understanding tax obligations—such as income tax, VAT, payroll taxes—is essential 
      for compliance and accurate forecasting. Strategic tax planning involves taking advantage 
      of deductions, credits, and incentives legally available to minimize tax liability. Working 
      with a tax professional can help you navigate complex regulations and avoid penalties.`
    },
    {
      question: "What role does accounting software play in managing finances?",
      answer: `Accounting software automates the recording, classification, and reporting of 
      financial transactions. It improves accuracy, saves time, and provides real-time insights 
      into your financial status. Popular tools integrate invoicing, payroll, budgeting, and 
      tax management. Selecting the right software tailored to your business size and needs 
      can greatly enhance financial control and decision-making.`
    },
    {
      question: "How do I evaluate the financial health of my business?",
      answer: `Evaluating financial health involves analyzing key metrics like liquidity ratios, 
      profitability ratios, debt levels, and cash flow patterns. Reviewing financial statements, 
      comparing them with industry benchmarks, and tracking trends over time help identify strengths 
      and vulnerabilities. Regular audits and financial reviews provide an objective assessment 
      critical for making informed business decisions.`
    },
    {
      question: "What is the importance of financial forecasting?",
      answer: `Financial forecasting predicts future revenues, expenses, and cash flows based on 
      historical data and market trends. It helps businesses prepare budgets, plan investments, 
      manage risks, and communicate expectations to stakeholders. Accurate forecasts support 
      strategic planning, resource allocation, and identifying potential shortfalls before they 
      become critical.`
    },
    {
      question: "How can risk management be integrated into financial planning?",
      answer: `Risk management involves identifying, assessing, and mitigating financial risks 
      such as market fluctuations, credit risks, and operational disruptions. Incorporating risk 
      strategies—like diversification, insurance, contingency funds, and hedging—within financial 
      planning helps protect assets and ensures business continuity. Proactive risk management 
      reduces unexpected losses and stabilizes cash flow.`
    },
    {
      question: "What are fixed and variable costs and why do they matter?",
      answer: `Fixed costs remain constant regardless of production levels—examples include rent, 
      salaries, and insurance. Variable costs change in proportion to business activity, like raw 
      materials and sales commissions. Understanding this distinction helps in pricing, budgeting, 
      and profitability analysis. Managing variable costs flexibly and minimizing unnecessary fixed 
      costs can improve financial resilience.`
    },
    {
      question: "How do I prepare for a financial audit?",
      answer: `Preparing for a financial audit requires organizing financial records, ensuring 
      accurate bookkeeping, and complying with regulatory requirements. Conduct internal reviews, 
      reconcile accounts, and address discrepancies before auditors arrive. Transparent documentation, 
      including receipts, contracts, and invoices, supports smooth audits. Preparation builds trust 
      with stakeholders and improves financial governance.`
    },
    {
      question: "What strategies can help in managing business debt effectively?",
      answer: `Effective debt management involves understanding loan terms, prioritizing repayments, 
      and maintaining a healthy credit rating. Strategies include consolidating high-interest debts, 
      negotiating better terms, and avoiding unnecessary borrowing. Planning cash flow to meet debt 
      obligations on time prevents penalties and preserves financial stability. Consulting financial 
      advisors can help tailor debt strategies to your business needs.`
    }
  ];

  return (
    <div className={`container my-5 p-4 rounded shadow-sm bg-${theme === 'dark' ? 'dark' : 'light'} text-${theme === 'dark' ? 'light' : 'dark'}`}>
      <h2 className={`text-center mb-4 ${theme === 'dark' ? 'text-info' : 'text-primary'}`}>
        Frequently Asked Questions
      </h2>
      {faqs.map(({ question, answer }, idx) => (
        <details 
          className={`mb-3 rounded p-3 ${theme === 'dark' ? 'bg-secondary' : 'bg-light'}`} 
          key={idx}
          style={{ 
            marginBottom: '1rem',
            border: theme === 'dark' ? '1px solid #444' : '1px solid #ddd'
          }}
        >
          <summary 
            className="h5" 
            style={{ 
              cursor: 'pointer', 
              fontWeight: 'bold', 
              fontSize: '1.1rem',
              color: theme === 'dark' ? '#ffc107' : '#0d6efd'
            }}
          >
            {question}
          </summary>
          <p 
            className="mt-2" 
            style={{ 
              marginTop: '0.5rem', 
              lineHeight: '1.5',
              color: theme === 'dark' ? '#f8f9fa' : '#212529'
            }}
          >
            {answer}
          </p>
        </details>
      ))}
    </div>
  );  
};

export default FAQPage;
