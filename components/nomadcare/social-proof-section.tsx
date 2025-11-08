const partners = [
  { 
    name: "DAREDATA", 
    logo: "https://cdn.prod.website-files.com/62c305695ea0ee4ee7cbded9/671f67fd164695e38cc17464_Black-Logo-DAREDATA.webp"
  },
  { 
    name: "Sonant", 
    logo: "https://cdn.prod.website-files.com/67917dc6f9229a4935db4941/67aff73120d4f92fc253b140_Sonant%20Logo%20Combination%20-%20Black%20(1).svg"
  },
  {
    name: "UBI Medical",
    logo: "https://ubimedical.pt/wp-content/uploads/2021/07/image002.png"
  }
];

export function SocialProofSection() {
  return (
    <section className="section-padding-y container-padding-x bg-muted/30">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="heading-md mb-12 text-balance">Trusted by healthcare innovators globally</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="h-16 rounded-lg bg-card border border-border flex items-center justify-center px-4"
              title={partner.name}
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-12 max-w-full object-contain" 
              />
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-8">
        </p>
      </div>
    </section>
  );
}
