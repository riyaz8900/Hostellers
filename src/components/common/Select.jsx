// // src/components/common/Select.jsx
// import { useState } from 'react';
// import {
//   Label,
//   Listbox,
//   ListboxButton,
//   ListboxOption,
//   ListboxOptions,
// } from '@headlessui/react';
// import { ChevronUpDownIcon } from '@heroicons/react/16/solid';
// import { CheckIcon } from '@heroicons/react/20/solid';

// export default function Select({ 
//   title, 
//   options = [], 
//   value, 
//   onChange, 
//   isDisabled = false 
// }) {
//   const [query, setQuery] = useState('');

//   const filteredOptions =
//     query === ''
//       ? options
//       : options.filter((option) =>
//           option.label.toLowerCase().includes(query.toLowerCase())
//         );

//   return (
//     <Listbox
//       value={value}
//       onChange={(val) => {
//         setQuery('');
//         onChange && onChange(val);
//       }}
//       disabled={isDisabled}
//     >
//       <Label className="block text-sm font-medium text-gray-900">{title}</Label>
//       <div className="relative mt-2 border rounded-md">
//         <ListboxButton className="flex w-full justify-between items-center rounded-md bg-white py-2 px-3 text-left text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed">
//           <span className="block truncate">
//             {value?.label || `Select ${title}`}
//           </span>
//           <ChevronUpDownIcon
//             aria-hidden="true"
//             className="h-5 w-5 text-gray-400"
//           />
//         </ListboxButton>

//         <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
//           <div className="sticky top-0 bg-white px-3 py-2">
//             <input
//               type="text"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
//               placeholder={`Search ${title}...`}
//             />
//           </div>

//           {filteredOptions.length === 0 ? (
//             <div className="px-3 py-2 text-gray-500">No results found.</div>
//           ) : (
//             filteredOptions.map((option) => (
//               <ListboxOption
//                 key={option.value}
//                 value={option}
//                 className="relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-yellow-100 data-[selected]:bg-indigo-600 data-[selected]:text-white"
//               >
//                 <div className="flex items-center">
//                   <span className="ml-1 block truncate font-normal data-[selected]:font-semibold">
//                     {option.label}
//                   </span>
//                 </div>

//                 <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 data-[selected]:block hidden">
//                   <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                 </span>
//               </ListboxOption>
//             ))
//           )}
//         </ListboxOptions>
//       </div>
//     </Listbox>
//   );
// }
import React from 'react';

const Select = ({ title, options = [], value, onChange, isDisabled = false }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{title}</label>
      <select
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        value={value?.value || ''}
        onChange={(e) => {
          const selected = options.find(opt => opt.value === e.target.value);
          onChange(selected);
        }}
        disabled={isDisabled}
      >
        <option value="">Select {title}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;