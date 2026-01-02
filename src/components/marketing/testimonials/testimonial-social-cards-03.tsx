import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
import { VerifiedTick } from "@/components/base/avatar/base-components";
import { cx } from "@/utils/cx";

const reviews = [
    [
        {
            id: "review-01",
            quote: "TokenTra paid for itself in the first week. We found $40K in wasted AI spend we didn't know existed. The dashboard visibility is incredible.",
            author: {
                name: "Sarah Chen",
                title: "Head of Platform, AI Startup",
                imageUrl: "https://www.untitledui.com/images/avatars/nikolas-gibbons?fm=webp&q=80",
            },
            company: {
                name: "Powersurge",
                imageUrl: "https://www.untitledui.com/logos/logotype/color/powersurge.svg",
                imageUrlDark: "https://www.untitledui.com/logos/logotype/white/powersurge.svg",
            },
        },
        {
            id: "review-02",
            quote: "Finally, one dashboard for all our AI spend across OpenAI, Anthropic, and AWS Bedrock. No more spreadsheet chaos.",
            author: {
                name: "Mike Rodriguez",
                title: "CTO, TechFlow",
                imageUrl: "https://www.untitledui.com/images/avatars/marco-kelly?fm=webp&q=80",
            },
            company: {
                name: "Railspeed",
                imageUrl: "https://www.untitledui.com/logos/logotype/color/railspeed.svg",
                imageUrlDark: "https://www.untitledui.com/logos/logotype/white/railspeed.svg",
            },
        },
        {
            id: "review-03",
            quote: "The SDK was trivial to add—literally 3 lines of code. Zero latency impact on our production systems. Our finance team finally has real-time visibility.",
            author: {
                name: "Priya Sharma",
                title: "Staff Engineer, DataScale",
                imageUrl: "https://www.untitledui.com/images/avatars/zaid-schwartz?fm=webp&q=80",
            },
            company: {
                name: "Wildcrafted",
                imageUrl: "https://www.untitledui.com/logos/logotype/color/wildcrafted.svg",
                imageUrlDark: "https://www.untitledui.com/logos/logotype/white/wildcrafted.svg",
            },
        },
    ],
    [
        {
            id: "review-01",
            quote: "We were spending $80K/month on AI with no idea where it was going. TokenTra showed us exactly which features were burning cash.",
            author: {
                name: "James Wilson",
                title: "VP Engineering, CloudAI",
                imageUrl: "https://www.untitledui.com/images/avatars/ammar-foley?fm=webp&q=80",
            },
            company: {
                name: "Goodwell",
                imageUrl: "https://www.untitledui.com/logos/logotype/color/goodwell.svg",
                imageUrlDark: "https://www.untitledui.com/logos/logotype/white/goodwell.svg",
            },
        },
        {
            id: "review-02",
            quote: "The smart routing feature alone saved us 30% on our monthly AI bill. TokenTra automatically picks the best model for each request.",
            author: {
                name: "Emily Zhang",
                title: "ML Lead, Synthetics",
                imageUrl: "https://www.untitledui.com/images/avatars/florence-shaw?fm=webp&q=80",
            },
            company: {
                name: "Quixotic",
                imageUrl: "https://www.untitledui.com/logos/logotype/color/quixotic.svg",
                imageUrlDark: "https://www.untitledui.com/logos/logotype/white/quixotic.svg",
            },
        },
        {
            id: "review-03",
            quote: "Budget alerts saved us from a runaway experiment that would have cost $15K. TokenTra caught it in 10 minutes.",
            author: {
                name: "David Park",
                title: "CTO, NeuralOps",
                imageUrl: "https://www.untitledui.com/images/avatars/owen-garcia?fm=webp&q=80",
            },
            company: {
                name: "Solaris Energy",
                imageUrl: "https://www.untitledui.com/logos/logotype/color/solaris-energy.svg",
                imageUrlDark: "https://www.untitledui.com/logos/logotype/white/solaris-energy.svg",
            },
        },
    ],
    [
        {
            id: "review-01",
            quote: "Our workflow has improved dramatically since we started using TokenTra. Cost attribution by team and feature changed how we budget for AI.",
            author: {
                name: "Rachel Kim",
                title: "Director of Engineering, AIFirst",
                imageUrl: "https://www.untitledui.com/images/avatars/mathilde-lewis?fm=webp&q=80",
            },
            company: {
                name: "Stack3d Lab",
                imageUrl: "https://www.untitledui.com/logos/logotype/color/stackedlab.svg",
                imageUrlDark: "https://www.untitledui.com/logos/logotype/white/stackedlab.svg",
            },
        },
        {
            id: "review-02",
            quote: "TokenTra is an absolute game-changer. We went from 'AI costs are a black box' to 'we know exactly where every dollar goes' in one day.",
            author: {
                name: "Alex Thompson",
                title: "Founder, BuildAI",
                imageUrl: "https://www.untitledui.com/images/avatars/stefan-sears?fm=webp&q=80",
            },
            company: {
                name: "Magnolia",
                imageUrl: "https://www.untitledui.com/logos/logotype/color/magnolia.svg",
                imageUrlDark: "https://www.untitledui.com/logos/logotype/white/magnolia.svg",
            },
        },
        {
            id: "review-03",
            quote: "The semantic caching feature reduced our API calls by 40%. Same results, fraction of the cost. Highly recommend TokenTra.",
            author: {
                name: "Lisa Martinez",
                title: "Head of AI, ScaleUp",
                imageUrl: "https://www.untitledui.com/images/avatars/harriet-rojas?fm=webp&q=80",
            },
            company: {
                name: "Ikigai Labs",
                imageUrl: "https://www.untitledui.com/logos/logotype/color/ikigailabs.svg",
                imageUrlDark: "https://www.untitledui.com/logos/logotype/white/ikigailabs.svg",
            },
        },
    ],
];

export const TestimonialSocialCards03 = () => {
    let reviewsCount = 0;
    const maxVisibleReviewsOnMobile = 4;

    return (
        <div className="flex flex-col items-center gap-16 bg-primary py-16 lg:py-24">
            <div className="flex max-w-container flex-col items-center gap-4 px-4 text-center lg:gap-5 lg:px-8">
                <h1 className="text-display-sm font-semibold text-primary lg:text-display-md">What Our Customers Say</h1>
                <p className="text-lg text-tertiary lg:text-xl">Hear from teams who've transformed their AI cost management with TokenTra.</p>
            </div>
            <div className="grid max-w-container grid-cols-1 gap-5 mask-b-from-[calc(100%-340px)] px-4 lg:grid-cols-3 lg:gap-8 lg:px-8">
                {reviews.map((reviewGroup, reviewGroupIndex) => {
                    return (
                        <div
                            key={reviewGroupIndex}
                            className={cx(
                                "flex flex-col gap-5 lg:gap-8",
                                reviewGroupIndex === 0 && "lg:py-8",
                                reviewGroupIndex === 2 && "lg:pt-10",
                                reviewsCount >= maxVisibleReviewsOnMobile && "max-lg:hidden",
                            )}
                        >
                            {reviewGroup.map((review) => {
                                reviewsCount += 1;
                                return (
                                    <div
                                        key={review.id}
                                        className={cx(
                                            "flex flex-col gap-8 rounded-xl bg-primary_alt p-6 ring-1 ring-secondary ring-inset lg:justify-between lg:gap-12 lg:p-8",
                                            reviewsCount >= maxVisibleReviewsOnMobile && "max-lg:hidden",
                                        )}
                                    >
                                        <div className="flex flex-col items-start gap-3">
                                            <img className="h-8 dark:hidden" src={review.company.imageUrl} alt={review.company.name} />
                                            <img className="h-8 opacity-85 not-dark:hidden" src={review.company.imageUrlDark} alt={review.company.name} />
                                            <blockquote className="text-md text-tertiary">{review.quote}</blockquote>
                                        </div>
                                        <AvatarLabelGroup
                                            size="lg"
                                            src={review.author.imageUrl}
                                            alt={review.author.name}
                                            title={
                                                <span className="relative flex items-center gap-1">
                                                    {review.author.name}
                                                    <VerifiedTick size="lg" />
                                                </span>
                                            }
                                            subtitle={review.author.title}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
