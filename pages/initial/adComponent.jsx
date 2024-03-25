// components/AdComponent.js
import { useEffect } from 'react';

const AdComponent = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = '//pl22890007.profitablegatecpm.com/ca/10/22/ca102243340209a99ee3a27402245adf.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = '//pl22890023.profitablegatecpm.com/7e/54/c4/7e54c439c2b47dd6685547a766aac81f.js';
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return null;
};

export default AdComponent;
