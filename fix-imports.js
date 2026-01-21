const fs = require('fs');
const path = require('path');

const fixes = {
  'src/pages/API.tsx': {
    old: "import React, { useState } from 'react';",
    new: "import { useState } from 'react';",
  },
  'src/pages/About.tsx': {
    old: "import React from 'react';",
    new: "",
  },
  'src/pages/Blog.tsx': {
    old: "import React, { useState } from 'react';",
    new: "import { useState } from 'react';",
  },
  'src/pages/Careers.tsx': {
    old: "import React, { useState } from 'react';",
    new: "import { useState } from 'react';",
  },
  'src/pages/Community.tsx': {
    old: "import React from 'react';",
    new: "",
  },
  'src/pages/Cookies.tsx': {
    old: "import React, { useState } from 'react';",
    new: "import { useState } from 'react';",
  },
  'src/pages/Help.tsx': {
    old: "import React, { useState } from 'react';",
    new: "import { useState } from 'react';",
  },
  'src/pages/Integrations.tsx': {
    old: "import React from 'react';",
    new: "",
  },
  'src/pages/POPIA.tsx': {
    old: "import React from 'react';",
    new: "",
  },
  'src/pages/Press.tsx': {
    old: "import React from 'react';",
    new: "",
  },
  'src/pages/Pricing.tsx': {
    old: "import React, { useState } from 'react';",
    new: "import { useState } from 'react';",
  },
  'src/pages/Privacy.tsx': {
    old: "import React from 'react';",
    new: "",
  },
  'src/pages/Status.tsx': {
    old: "import React from 'react';",
    new: "",
  },
  'src/pages/Terms.tsx': {
    old: "import React from 'react';",
    new: "",
  },
};

Object.entries(fixes).forEach(([file, {old, new: newStr}]) => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(old, newStr);
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${file}`);
  }
});
console.log('Done!');
