import { Check } from "lucide-react";

interface InstructionStepProps {
  step: number;
  title: string;
  description: string;
}

const InstructionStep = ({ step, title, description }: InstructionStepProps) => {
  return (
    <div className="flex items-start mb-8">
      <div className="flex-shrink-0 mr-4">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
          <Check className="h-5 w-5" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium mb-2">
          <span className="text-primary font-semibold mr-2">{step}.</span>
          {title}
        </h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default InstructionStep;