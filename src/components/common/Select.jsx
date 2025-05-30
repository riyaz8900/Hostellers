// src/components/common/Select.jsx
import { useState } from 'react';
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/16/solid';
import { CheckIcon } from '@heroicons/react/20/solid';

export default function Select({ 
  title, 
  options = [], 
  value, 
  onChange, 
  isDisabled = false 
}) {
  const [query, setQuery] = useState('');

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) =>
          option.label.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <Listbox
      value={value}
      onChange={(val) => {
        setQuery('');
        onChange(val);
      }}
      disabled={isDisabled}
    >
      {({ open }) => (
        <>
          <Label className="block text-sm font-medium text-gray-700 mb-1">
            {title}
          </Label>
          <div className="relative">
            <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6 disabled:opacity-50 disabled:cursor-not-allowed">
              <span className="block truncate">
                {value?.label || `Select ${title}`}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>

            {open && (
              <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <div className="sticky top-0 bg-white px-3 py-2 border-b">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder={`Search ${title}...`}
                    autoFocus
                  />
                </div>

                {filteredOptions.length === 0 ? (
                  <div className="px-3 py-2 text-gray-500">No results found.</div>
                ) : (
                  filteredOptions.map((option) => (
                    <ListboxOption
                      key={option.value}
                      value={option}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-3 pr-9 ${
                          active ? 'bg-blue-100' : 'text-gray-900'
                        }`
                      }
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-semibold' : 'font-normal'
                            }`}
                          >
                            {option.label}
                          </span>

                          {selected ? (
                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </ListboxOption>
                  ))
                )}
              </ListboxOptions>
            )}
          </div>
        </>
      )}
    </Listbox>
  );
}