import Typography from '@/components/ui/Typography';

const HeroText = () => (
  <div className="col-span-3">
    <Typography as="p" type="p" className="text-white">
      More than a resume builder
    </Typography>
    <Typography as="h1" type="h1" className="text-white whitespace-nowrap">
      Your <span className="text-primary">resume</span> profile is your
    </Typography>
    <Typography as="h1" type="h1" className="text-white whitespace-nowrap">
      personal <span className="text-primary">marketing</span> tool!
    </Typography>
    <Typography as="p" type="p" className="text-white mt-[43px] mb-[90px]">
      &quot;Wizaaard is the world’s first website experience platform—empowering
      both rising and seasoned professionals to create, manage, and optimize
      digital profiles that truly represent who they are.&quot;
    </Typography>
  </div>
);

export default HeroText;
