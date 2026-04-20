const Card = ({ children, headerSlot, className }) => {
  return <div className={className}>
    <>{headerSlot}</>
    <section className="glass-card dark:text-gray-300 lg:p-6 p-4 lg:duration-100">
        {children}
    </section>
  </div>
}
export default Card
