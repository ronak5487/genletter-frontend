import { useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { Navigate, useNavigate } from 'react-router-dom';

const plans = [
  {
    name: 'Multi Column resume',
    type: 'Resume 1',
    
  },
  {
    name: 'Single Column resume',
    type: 'Resume 2',
    
  },
  
]

export default function Example(props) {
  const navigate=useNavigate();
  const [selected, setSelected] = useState(plans[0]);

  

  const continueForm = e => {
    e.preventDefault();
    props.nextStep();

};
useEffect(()=>{
   const a=selected===plans[0]?true:false;
   props.setRes1(a);
},[selected])
  

  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                      : ''
                  }
                  ${
                    checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? 'text-sky-100' : 'text-gray-500'
                            }`}
                          >
                            <span>
                              {plan.type}
                            </span>{' '}
                            <span aria-hidden="true">&middot;</span>{' '}
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
      <div className='flex flex-col items-center justify-center'>
      <h1 className='text-center  text-white text-2xl mt-10'>Please select which type of resume you want !!</h1>
    <button onClick={continueForm} className='w-20 h-10 right-0 justify-center items-center text-lg rounded-lg text-center mt-10 pt-1 text-white bg-black'
      > Next</button>
    </div>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <>
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    </>
  )
}
