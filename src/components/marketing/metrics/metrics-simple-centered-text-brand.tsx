"use client";

import { Fragment } from "react";
import { TrendUp01 } from "@untitledui/icons";

export const MetricsSimpleCenteredTextBrand = () => {
    return (
        <section className="bg-gradient-to-r from-purple-600 to-purple-900 py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 md:gap-16">
                    <div className="flex w-full flex-col items-center self-center text-center md:max-w-3xl">
                        <div className="flex size-14 items-center justify-center rounded-full bg-white shadow-lg">
                            <TrendUp01 className="size-7 text-purple-600" />
                        </div>

                        <h2 className="mt-4 text-display-sm font-semibold text-primary_on-brand md:mt-6 md:text-display-md">Results That Speak</h2>
                        <p className="mt-4 text-lg text-secondary_on-brand md:mt-5 md:text-xl">Teams using TokenTra see real savings and better visibility into their AI operations.</p>
                    </div>
                    <dl className="flex w-full flex-col justify-center gap-8 md:max-w-4xl md:flex-row md:gap-4 md:self-center">
                        {[
                            {
                                title: "32%",
                                subtitle: "Avg. cost savings",
                            },
                            {
                                title: "<5min",
                                subtitle: "Setup time",
                            },
                            {
                                title: "$2.4M+",
                                subtitle: "Customer savings",
                            },
                            {
                                title: "99.9%",
                                subtitle: "Uptime SLA",
                            },
                        ].map((item, index) => (
                            <Fragment key={item.title}>
                                {index !== 0 && <div className="hidden border-l border-brand_alt md:block" />}
                                <div className="flex flex-1 flex-col-reverse gap-3 text-center">
                                    <dt className="text-lg font-semibold text-tertiary_on-brand">{item.subtitle}</dt>
                                    <dd className="text-display-lg font-semibold text-primary_on-brand md:text-display-xl">{item.title}</dd>
                                </div>
                            </Fragment>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};
