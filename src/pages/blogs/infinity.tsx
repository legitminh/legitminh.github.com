import Navbar from "@/components/Nav/Navbar"
import ThemeWrapper from "@/components/ThemeWrapper"
import Text from "@/components/Text/Text"
import FileSection from "@/components/FileSection"
import TextImageLink from "@/components/About/TextImageLink"
import Head from "next/head"
import PageMargin from "@/components/PageMargin"
export default function f(){
    return(
        <ThemeWrapper>
             <Head>
                <title>Infinity</title>
            </Head>
            <Navbar></Navbar>
            <div className={ " bg-transparent h-max mt-[2rem]"}>

            <center>
                <h1 className=" text-6xl content-center text-c0 w-screen">
                    Infinity? ∞
                </h1>
            </center>
            <PageMargin>
                <div className=" [&>*]:text-c0">
                <p >
                    Infinity is quite an outlandish subject, we hardly ever needed it and speculations remains philosophical, this is an unpolished opinion piece I wrote in a few minutes to discuss with my discord friends
                    <br></br> 
                    <br></br>
                    (From this point, a line refers to a segment (I totally didn&apos;t typo-ed)). 
                    If you think about this, a line is just a collection of points, but it is an infinite collection of points, yet the collection have a size, and a relative collection (line) of a larger size can be quantified in relative to the first collection, in fact, any line can be &quot;measured&quot; in that way, an ARBITRARY SIZED collection of points, you can very much think a unit or a cm is one infinity, and multiple of that unit is just multiple infinities. This means there must be some abitrary set that one uses as the foundational infinity or unit or cm. For the case of numbers, counting numbers can be thought of as a class of quantity (number), while measurements like the size of that class&apos;s space can either be described as a number (set of one digit numbers) or something outside of the set itself, like, you guess it, infinity (the size of that set), and a set twice as big is gonna be 2infinity, just like 2cm or 2 units. BUT THEN we run into the problem of I heard this reliable math person said there are the same amount of evens as there are natural numbers, but the same cannot be said for geometric lenght, 2 cm could be divided into 1 cm, but 2cm isn&apos;t 1cm is it? Therefore, let be more specific with how we actually measure RELATIVE sizes of infinite sets, in geometry, if there is a non-scaling (determinant 1) LINEAR transformation that perfectly shift an infinity set into another (perfect theoretical mapping) with no residue, then they are equal, in addiiton, the determinant requires to make a perfect mapping would be the relative sizes. Wait, hold on, the number of point is still the same, you lied to me! Kinda, I just realized also, therefore, the space needs to have a certain density, and the points needs to re-densify in a way. That seems overly compicated is it? Couldn&apos;t we just say the relative sizes are the length (endpoint minus initial point)? Hear me out here, the goal is to relate to the sizes of the point, for your comfort, instead of thinking it as a scaling effect, maybe addition of a certain portion of the existing line is sufficient. Now, we do not have said luxury in algebra do we? Well, Micheal from Vsauce demonstrated how that might work, imaging assigning all natural numbers on the line described by vector (0,1in - in as in infinity, not inch), (if only considering natural numbers, assignment could go like f(x)=x*1/in). Now, the even numbers would be the line (0,2), but that line is half as dense (prove by distance between consecutive points), thus half as many points. So how do you get 2in? Easy, W+1, W+2, W+3,… or imaginary numbers, or integers instead of natural numbers. And for positive rational numbers, it would be impossible to make a segment that fits all elements while maintaining the same density of natural numbers, therefore, the line will go on to infinity. It would have the same “size” with a 1in by 1in square, and if you’re struggling with imagining a square of natural numbers by natural numbers and conjure some algorithm to match any arbitrary decimal to any two numbers with unique number and order to that decimal, but a more elegant way would be p/q with p be the y or imaginary axis, and q be the x axis. Amazing, what if we add irrational numbers, how about volume, this peculiar model allows endless possibilities, or should I say infinite possibilities?
                    <br></br>
                    <br></br>
                    But this is just spontanious thinking, I didn&apos;t take into account cardinality, which said integers = naturals, and more, so IDK.
                </p>
                </div>
            </PageMargin>
            </div>
        </ThemeWrapper>
        
    )
}
