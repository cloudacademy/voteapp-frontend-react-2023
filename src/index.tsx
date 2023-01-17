import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import VoteApp from './components/VoteApp';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<VoteApp />);
