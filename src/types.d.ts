export interface FAQ {
question: string;
answer: string;
}

export interface Feature {
title: string;
description: string;
icon: string;
}  

export interface FormField {
label: string;
type:
    | "text"
    | "email"
    | "password"
    | "number"
    | "textarea"
    | "checkbox"
    | "radio"
    | "select";
name: string;
placeholder?: string;
options?: string[]; // For select and radio fields
}

export interface ProcessStep {
title: string;
description: string;
icon?: string;
}

export interface PricingPlan {
title: string;
subtitle: string;
price: string;
period: string;
features: string[];
buttonText: string;
}

export interface Service {
title: string;
description: string;
icon?: string;
}

export interface Testimonial {
name: string;
title: string;
message: string;
avatarUrl: string;
}
  
